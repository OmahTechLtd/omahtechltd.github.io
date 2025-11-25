"""
AMINE SYSTEM ANOMALY DETECTION MODEL
Goal: Automatically detect abnormal or degrading amine system behaviour.
"""

# =============== IMPORTS ===============
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import joblib
import json
from pathlib import Path
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import IsolationForest


# =============== PATHS ===============
BASE_DIR = Path(__file__).resolve().parent
DATA_PATH = BASE_DIR / "amine_gen_data.csv"
MODEL_PATH = BASE_DIR / "model.pkl"
SCALER_PATH = BASE_DIR / "scaler.pkl"
METRICS_PATH = BASE_DIR / "metrics.json"
SUMMARY_PATH = BASE_DIR / "summary.md"


# =============== LOAD DATA ===============
df = pd.read_csv(DATA_PATH)
print("Dataset Loaded:", df.shape)
print(df.head())

# Keep only numeric columns
df_numeric = df.select_dtypes(include=["int64", "float64"])
print("Numeric shape:", df_numeric.shape)

# Drop rows with missing values
df_numeric = df_numeric.dropna()
print("Cleaned shape:", df_numeric.shape)


# =============== SCALING ===============
scaler = StandardScaler()
X_scaled = scaler.fit_transform(df_numeric)


# =============== ISOLATION FOREST ===============
model = IsolationForest(
    n_estimators=300,
    contamination=0.03,   # predicted anomaly ratio
    random_state=42
)

model.fit(X_scaled)

# Predict anomalies
df_numeric["anomaly"] = model.predict(X_scaled)
df_numeric["score"] = model.decision_function(X_scaled)

# Stats
anomaly_count = int((df_numeric["anomaly"] == -1).sum())
normal_count = int((df_numeric["anomaly"] == 1).sum())


# =============== EDA PLOTS ===============

# 1. Anomaly Distribution
plt.figure(figsize=(6,4))
sns.countplot(x=df_numeric["anomaly"].map({1: "Normal", -1: "Anomaly"}))
plt.title("Anomaly Distribution in Amine System")
plt.tight_layout()
plt.savefig(BASE_DIR / "eda_anomaly_distribution.png")
plt.close()

# 2. Correlation Heatmap
plt.figure(figsize=(10,8))
sns.heatmap(df_numeric.drop(columns=["anomaly", "score"]).corr(), cmap="coolwarm")
plt.title("Feature Correlation Heatmap")
plt.tight_layout()
plt.savefig(BASE_DIR / "eda_correlation_heatmap.png")
plt.close()


# =============== SAVE ARTIFACTS ===============
joblib.dump(model, MODEL_PATH)
joblib.dump(scaler, SCALER_PATH)

metrics = {
    "total_samples": len(df_numeric),
    "normal_points": normal_count,
    "anomaly_points": anomaly_count,
    "anomaly_percentage": round(anomaly_count / len(df_numeric), 4),
}

with open(METRICS_PATH, "w") as f:
    json.dump(metrics, f, indent=4)

summary_text = f"""
# Amine System Anomaly Detection Model

Goal: Detect unusual or degrading behaviour in an amine regeneration system.

### Model Type
Unsupervised Anomaly Detection  
Algorithm: Isolation Forest

### Dataset
Industrial amine system operating variables (numeric features only)

### Key Results
- Total samples: {metrics['total_samples']}
- Normal points: {metrics['normal_points']}
- Anomaly points: {metrics['anomaly_points']}
- Estimated anomaly percentage: {metrics['anomaly_percentage']*100:.2f}%

### Files Generated
- model.pkl
- scaler.pkl
- metrics.json
- eda_anomaly_distribution.png
- eda_correlation_heatmap.png
"""

with open(SUMMARY_PATH, "w") as f:
    f.write(summary_text.strip())

print("Training completed. All artifacts saved.")