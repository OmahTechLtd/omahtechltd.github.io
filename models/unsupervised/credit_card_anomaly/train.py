# ============================
#  CREDIT CARD FRAUD DETECTION (Improved Recall)
#  Using Random Forest + SMOTE + RobustScaler
# ============================

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import RobustScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix, roc_auc_score
from imblearn.over_sampling import SMOTE
import joblib
import json
import os

# 1️⃣ Load dataset
data_path = "/Users/veraezeagu/omahtech.github.io/models/unsupervised/credit_card_anomaly/creditcard.csv"
df = pd.read_csv(data_path)
print("Dataset loaded:", df.shape)

# 2️⃣ Split features and labels
X = df.drop(columns=["Class"])
y = df["Class"]

# 3️⃣ Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

# 4️⃣ Scale data
scaler = RobustScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 5️⃣ Balance data using SMOTE
sm = SMOTE(random_state=42)
X_train_res, y_train_res = sm.fit_resample(X_train_scaled, y_train)
print("After SMOTE:", np.bincount(y_train_res))

# 6️⃣ Train Random Forest
rf = RandomForestClassifier(
    n_estimators=300,
    max_depth=15,
    class_weight="balanced",  # double protection against imbalance
    random_state=42
)
rf.fit(X_train_res, y_train_res)

# 7️⃣ Evaluate
y_pred = rf.predict(X_test_scaled)
report = classification_report(y_test, y_pred, output_dict=True)
conf_matrix = confusion_matrix(y_test, y_pred)
roc_auc = roc_auc_score(y_test, rf.predict_proba(X_test_scaled)[:, 1])

print("\nClassification Report:\n", json.dumps(report, indent=4))
print("\nConfusion Matrix:\n", conf_matrix)
print("\nROC-AUC:", roc_auc)

# 8️⃣ Save model and metrics
output_dir = os.path.dirname(data_path)
joblib.dump(rf, os.path.join(output_dir, "model.pkl"))
metrics = {
    "classification_report": report,
    "confusion_matrix": conf_matrix.tolist(),
    "roc_auc": roc_auc
}
with open(os.path.join(output_dir, "metrics.json"), "w") as f:
    json.dump(metrics, f, indent=4)

print("\n✅ Improved model saved successfully!")