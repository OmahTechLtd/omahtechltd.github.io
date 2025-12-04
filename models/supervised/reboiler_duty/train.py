"""
Reboiler Duty Prediction (Objective 2)

Target column (reboiler duty): "stripper - spec value (duty)"

Produces:
 - model.pkl
 - scaler.pkl
 - metrics.json
 - summary.md
 - EDA charts (PNG)
"""

import os
from pathlib import Path
import json
import joblib
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from sklearn.preprocessing import OneHotEncoder
from xgboost import XGBRegressor

# ----------------------------
# Configuration
# ----------------------------
BASE_DIR = Path(__file__).resolve().parent
DATA_PATH = BASE_DIR / "amine_gen_data.csv"   # update if your file path differs
MODEL_PATH = BASE_DIR / "model.pkl"
SCALER_PATH = BASE_DIR / "scaler.pkl"
METRICS_PATH = BASE_DIR / "metrics.json"
SUMMARY_PATH = BASE_DIR / "summary.md"

RANDOM_SEED = 42
TEST_SIZE = 0.2

# ----------------------------
# Helper functions
# ----------------------------
def safe_mkdir(p: Path):
    if not p.exists():
        p.mkdir(parents=True, exist_ok=True)

def save_metrics(metrics: dict, path: Path):
    with open(path, "w") as f:
        json.dump(metrics, f, indent=4)

def save_summary(text: str, path: Path):
    with open(path, "w") as f:
        f.write(text.strip())

# ----------------------------
# 1. Load data
# ----------------------------
print("Loading dataset:", DATA_PATH)
if not DATA_PATH.exists():
    raise FileNotFoundError(f"Dataset not found at {DATA_PATH}")

df = pd.read_csv(DATA_PATH)
print("Raw dataset shape:", df.shape)

# ----------------------------
# 2. Clean column names
# ----------------------------
# make column names friendly: strip whitespace, lowercase, replace spaces with _
df.columns = (
    df.columns.str.strip()
                 .str.replace(" ", "_")
                 .str.replace("(", "", regex=False)
                 .str.replace(")", "", regex=False)
                 .str.replace("%", "percent")
                 .str.lower()
)

print("Cleaned columns:", list(df.columns))

# ----------------------------
# 3. Confirm target column
# ----------------------------
TARGET_COL = "stripper_-_spec_value_duty".replace(" ", "_").lower()
# above ensures formatting consistent with the cleaning step
# But we will also allow a close match if exact name differs
if TARGET_COL not in df.columns:
    # try to find close match (human friendly)
    candidates = [c for c in df.columns if "duty" in c or "reboiler" in c or "stripper" in c]
    if len(candidates) == 1:
        TARGET_COL = candidates[0]
        print("Auto-selected target column:", TARGET_COL)
    else:
        raise KeyError(
            f"Target column not found. Expected '{TARGET_COL}'. "
            f"Candidates: {candidates}. If the correct target column differs, update TARGET_COL."
        )

print("Using target column:", TARGET_COL)

# ----------------------------
# 4. Basic cleaning and type conversions
# ----------------------------
# Remove completely empty columns
df = df.dropna(axis=1, how="all")

# Drop rows where target is missing
df = df[~df[TARGET_COL].isna()].copy()
print("After dropping rows with no target. shape:", df.shape)

# Attempt to coerce numeric-like columns to numeric
for col in df.columns:
    if df[col].dtype == object:
        # remove commas and convert where possible
        tmp = df[col].astype(str).str.replace(",", "").str.strip()
        # If values like "lbmole/hr" or units appear, converting will fail; we skip in that case
        coerced = pd.to_numeric(tmp, errors="coerce")
        # If more than half of the column becomes numeric, keep numeric conversion
        if coerced.notna().sum() >= (0.5 * len(coerced)):
            df[col] = coerced
        else:
            # keep original string values for potential categorical encoding
            df[col] = df[col].astype(str).str.strip()

# ----------------------------
# 5. Quick EDA charts
# ----------------------------
safe_mkdir(BASE_DIR / "eda")

# Histogram of target
plt.figure(figsize=(6, 4))
sns.histplot(df[TARGET_COL].dropna(), bins=50, kde=True)
plt.title("Distribution of Reboiler Duty (target)")
plt.xlabel("Reboiler Duty")
plt.tight_layout()
plt.savefig(BASE_DIR / "eda" / "eda_target_distribution.png")
plt.close()

# Pairwise or correlation heatmap for numeric columns
numeric_cols = df.select_dtypes(include=[np.number]).columns.tolist()
# ensure target is included
if TARGET_COL in numeric_cols:
    numeric_cols = [c for c in numeric_cols if c != TARGET_COL]  # exclude for some plots if needed

corr_cols = df.select_dtypes(include=[np.number]).columns
if len(corr_cols) >= 2:
    plt.figure(figsize=(8, 6))
    sns.heatmap(df[corr_cols].corr(), cmap="coolwarm", annot=False)
    plt.title("Correlation Heatmap (numeric features)")
    plt.tight_layout()
    plt.savefig(BASE_DIR / "eda" / "eda_correlation_heatmap.png")
    plt.close()

# Scatter: target vs top numeric features (top 4)
if len(corr_cols) > 1:
    # compute absolute correlation with target and plot the top ones
    corr_with_target = df[corr_cols].corrwith(df[TARGET_COL]).abs().sort_values(ascending=False)
    top_feats = corr_with_target.index[1:5].tolist()  # skip the target itself at position 0
    for feat in top_feats:
        plt.figure(figsize=(6, 4))
        sns.scatterplot(x=df[feat], y=df[TARGET_COL])
        plt.xlabel(feat)
        plt.ylabel("Reboiler Duty")
        plt.title(f"{feat} vs Reboiler Duty")
        plt.tight_layout()
        safe_path = BASE_DIR / "eda" / f"eda_{feat}_vs_target.png"
        plt.savefig(safe_path)
        plt.close()

# ----------------------------
# 6. Prepare features and target
# ----------------------------
# Drop obviously useless columns like index columns or wholly textual notes
# Keep all numeric columns and categorical columns with low cardinality
df = df.reset_index(drop=True)

# Basic strategy:
#  - numeric_features: all numeric columns except target
#  - categorical_features: object dtype columns with limited unique values
numeric_features = df.select_dtypes(include=[np.number]).columns.tolist()
if TARGET_COL in numeric_features:
    numeric_features.remove(TARGET_COL)

categorical_features = [
    c for c in df.select_dtypes(include=["object"]).columns
    if df[c].nunique() > 0 and df[c].nunique() < 100
]

print("Numeric features:", numeric_features)
print("Categorical features (low-card):", categorical_features)

X = df[numeric_features + categorical_features].copy()
y = df[TARGET_COL].astype(float).copy()

# If any columns are entirely NaN in X, drop them
X = X.dropna(axis=1, how="all")

# For safety, drop rows with NaN in y
mask = ~y.isna()
X = X.loc[mask, :]
y = y.loc[mask]

print("Feature matrix shape:", X.shape, "Target shape:", y.shape)

# ----------------------------
# 7. Train / Test split
# ----------------------------
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=TEST_SIZE, random_state=RANDOM_SEED
)
print("Train shape:", X_train.shape, "Test shape:", X_test.shape)

# ----------------------------
# 8. Preprocessing pipeline
# ----------------------------
# Numeric scaler and one-hot encoder for categorical
numeric_transformer = Pipeline(steps=[
    ("scaler", StandardScaler())
])

categorical_transformer = Pipeline(steps=[
    ("ohe", OneHotEncoder(handle_unknown="ignore", sparse_output=False))
])

preprocessor = ColumnTransformer(transformers=[
    ("num", numeric_transformer, numeric_features),
    ("cat", categorical_transformer, categorical_features)
], remainder="drop")

# Fit preprocessor on training data and transform both sets
print("Fitting preprocessor...")
X_train_proc = preprocessor.fit_transform(X_train)
X_test_proc = preprocessor.transform(X_test)

# Save scaler part (we will save the full preprocessor object as scaler.pkl so you can reuse transform)
joblib.dump(preprocessor, SCALER_PATH)
print("Saved preprocessor to", SCALER_PATH)

# ----------------------------
# 9. Model training: XGBoost Regressor
# ----------------------------
print("Training XGBoost regressor...")
xgb = XGBRegressor(
    n_estimators=300,
    learning_rate=0.05,
    max_depth=6,
    random_state=RANDOM_SEED,
    tree_method="hist",   # faster for larger datasets
    verbosity=0
)

xgb.fit(X_train_proc, y_train,
        eval_set=[(X_train_proc, y_train), (X_test_proc, y_test)],
        early_stopping_rounds=30,
        verbose=False)

# Save model
joblib.dump(xgb, MODEL_PATH)
print("Saved model to", MODEL_PATH)

# ----------------------------
# 10. Evaluation
# ----------------------------
y_pred = xgb.predict(X_test_proc)
r2 = float(r2_score(y_test, y_pred))
mae = float(mean_absolute_error(y_test, y_pred))
rmse = float(np.sqrt(mean_squared_error(y_test, y_pred)))

metrics = {
    "r2_score": round(r2, 4),
    "mae": round(mae, 4),
    "rmse": round(rmse, 4),
    "n_train": int(X_train.shape[0]),
    "n_test": int(X_test.shape[0]),
}

print("Evaluation metrics:", metrics)
save_metrics(metrics, METRICS_PATH)
print("Saved metrics to", METRICS_PATH)

# ----------------------------
# 11. Feature importance
# ----------------------------
# Prettier feature importance for original numeric + OHE categorical names
feature_names = []

# numeric feature names
feature_names.extend(numeric_features)

# categorical OHE feature names
if categorical_features:
    ohe = preprocessor.named_transformers_["cat"].named_steps["ohe"]
    cat_ohe_names = list(ohe.get_feature_names_out(categorical_features))
    feature_names.extend(cat_ohe_names)

# If the length of feature_names matches model input shape, plot importance
if len(feature_names) == X_train_proc.shape[1]:
    importances = xgb.feature_importances_
    fi_df = pd.DataFrame({"feature": feature_names, "importance": importances})
    fi_df = fi_df.sort_values("importance", ascending=False).head(40)

    plt.figure(figsize=(8, 8))
    sns.barplot(x="importance", y="feature", data=fi_df)
    plt.title("Feature Importance (top 40)")
    plt.tight_layout()
    plt.savefig(BASE_DIR / "eda" / "eda_feature_importance.png")
    plt.close()
else:
    # fallback: save raw importances
    np.save(BASE_DIR / "eda" / "raw_feature_importances.npy", xgb.feature_importances_)

# ----------------------------
# 12. Save summary
# ----------------------------
summary_text = f"""
# Reboiler Duty Prediction Model

Goal: Predict reboiler duty using amine system operating variables.

Algorithm: XGBoost Regressor
Dataset: {DATA_PATH.name}
Target: {TARGET_COL}

Results:
R²: {metrics['r2_score']}
MAE: {metrics['mae']}
RMSE: {metrics['rmse']}

Notes:
- Numeric features: {len(numeric_features)}
- Categorical features (one-hot encoded): {len(categorical_features)}
- Train/test split: {metrics['n_train']} train / {metrics['n_test']} test

Files generated:
- model.pkl (XGBoost model)
- scaler.pkl (preprocessor pipeline: scaler + OHE saved via joblib)
- metrics.json
- summary.md
- eda/*.png
"""

save_summary(summary_text, SUMMARY_PATH)
print("Saved summary to", SUMMARY_PATH)

print("\n✅ Training pipeline finished successfully.")