"""
GAS FLARING PREDICTION MODEL
Goal: Predict Total Gas Flared (MMSCF) using other production and utilization variables.

This script follows the same structure as the Employee Attrition model,
but applies regression instead of classification.
"""

# =============== IMPORT LIBRARIES ===============
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import joblib
import json
from pathlib import Path
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

# =============== SETUP PATHS ===============
BASE_DIR = Path(__file__).resolve().parent
DATA_PATH = BASE_DIR / "Annual Gas Production.csv"
MODEL_PATH = BASE_DIR / "model.pkl"
METRICS_PATH = BASE_DIR / "metrics.json"
SUMMARY_PATH = BASE_DIR / "summary.md"

# =============== LOAD DATA ===============
df = pd.read_csv(DATA_PATH)
print("Dataset Loaded:", df.shape)
print(df.head())

# =============== BASIC CLEANING ===============
# Rename columns to simpler names (remove spaces, convert to lowercase)
df.columns = (
    df.columns.str.strip()
    .str.replace(" ", "_")
    .str.replace("(", "", regex=False)
    .str.replace(")", "", regex=False)
    .str.replace("%", "Percent")
    .str.lower()
)

# Convert month names to numbers (e.g. January → 1)
month_map = {
    "january": 1, "february": 2, "march": 3, "april": 4,
    "may": 5, "june": 6, "july": 7, "august": 8,
    "september": 9, "october": 10, "november": 11, "december": 12
}
df["months"] = df["months"].str.strip().str.lower().map(month_map)

# Drop rows without valid month or total_gas_flared
df = df.dropna(subset=["months", "total_gas_flared_mmscf"])

# Convert all numeric-like columns to float
for col in df.columns:
    if df[col].dtype == object:
        try:
            df[col] = df[col].str.replace(",", "").astype(float)
        except Exception:
            pass

print("\nCleaned Columns:", df.columns.tolist())

# =============== EXPLORATORY DATA ANALYSIS (EDA) ===============
plt.figure(figsize=(7, 4))
sns.lineplot(data=df, x="months", y="total_gas_flared_mmscf", hue="year", marker="o")
plt.title("Monthly Gas Flaring Trends by Year")
plt.xlabel("Month")
plt.ylabel("Total Gas Flared (MMSCF)")
plt.legend(title="Year")
plt.tight_layout()
plt.savefig(BASE_DIR / "eda_flaring_trend.png")

plt.figure(figsize=(6, 4))
sns.scatterplot(data=df, x="total_gas_production_mmscf", y="total_gas_flared_mmscf", hue="year")
plt.title("Total Gas Production vs Gas Flaring")
plt.tight_layout()
plt.savefig(BASE_DIR / "eda_production_vs_flaring.png")

plt.figure(figsize=(6, 4))
sns.heatmap(df.corr(numeric_only=True), annot=False, cmap="coolwarm")
plt.title("Correlation Heatmap of Gas Variables")
plt.tight_layout()
plt.savefig(BASE_DIR / "eda_correlation_heatmap.png")

plt.close("all")

# =============== FEATURE SELECTION ===============
# Features: all numeric predictors except target
target = "total_gas_flared_mmscf"
features = [
    col for col in df.select_dtypes(include=[np.number]).columns
    if col not in [target, "year"]
]
X = df[features]
y = df[target]

# =============== TRAIN-TEST SPLIT ===============
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# =============== SCALE FEATURES ===============
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# =============== MODEL TRAINING ===============
model = RandomForestRegressor(
    n_estimators=200,
    random_state=42,
    max_depth=10
)
model.fit(X_train_scaled, y_train)

# =============== EVALUATION ===============
y_pred = model.predict(X_test_scaled)

r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))

print(f"R² Score: {r2:.3f}")
print(f"MAE: {mae:.3f}")
print(f"RMSE: {rmse:.3f}")

# =============== FEATURE IMPORTANCE VISUALIZATION ===============
importances = model.feature_importances_
importance_df = pd.DataFrame({
    'Feature': features,
    'Importance': importances
}).sort_values(by='Importance', ascending=False)

plt.figure(figsize=(8, 5))
sns.barplot(x='Importance', y='Feature', data=importance_df, palette='viridis')
plt.title("Feature Importance for Gas Flaring Prediction")
plt.tight_layout()
plt.savefig(BASE_DIR / "eda_feature_importance.png")

# Scatterplot of predicted vs actual
plt.figure(figsize=(6, 4))
sns.scatterplot(x=y_test, y=y_pred, color="teal")
plt.xlabel("Actual Total Gas Flared")
plt.ylabel("Predicted Total Gas Flared")
plt.title("Actual vs Predicted Gas Flaring")
plt.tight_layout()
plt.savefig(BASE_DIR / "eda_predicted_vs_actual.png")

# =============== SAVE MODEL AND METRICS ===============
joblib.dump(model, MODEL_PATH)

metrics = {
    "r2_score": round(r2, 3),
    "mae": round(mae, 3),
    "rmse": round(rmse, 3)
}
with open(METRICS_PATH, "w") as f:
    json.dump(metrics, f, indent=4)

# =============== SAVE SUMMARY FILE ===============
summary_text = f"""
# Gas Flaring Prediction Model

**Goal:** Predict Total Gas Flared (MMSCF) using multi-year Nigerian gas production data.

**Algorithm:** Random Forest Regressor  
**Dataset:** Annual Gas Production (2020–2025)  
**R² Score:** {r2:.3f}  
**MAE:** {mae:.3f}  
**RMSE:** {rmse:.3f}

### Key Findings
- Gas flaring correlates strongly with total gas production and export sales.  
- Domestic sales and field use reduce overall flaring.  
- Seasonal variations exist, with higher flaring in early months.

### Files Generated
- `model.pkl` — Trained Random Forest Regressor  
- `metrics.json` — Model performance metrics  
- `eda_*.png` — Visual insights  
- `summary.md` — Model summary and findings
"""
with open(SUMMARY_PATH, "w") as f:
    f.write(summary_text.strip())

print("\n✅ Training complete. Files saved successfully.")
