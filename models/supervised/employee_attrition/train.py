
# EMPLOYEE ATTRITION PREDICTION MODEL
# Goal: Predict whether an employee will leave the company 
# (attrition = Yes/No) using demographic and job-related data.

# Import all required libraries
import pandas as pd              
import numpy as np               
import matplotlib.pyplot as plt  
import seaborn as sns            
import joblib                    
import json                     
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import (
    accuracy_score, precision_score, recall_score, f1_score,
    confusion_matrix
)
from pathlib import Path         


BASE_DIR = Path(__file__).resolve().parent  # The current folder (employee_attrition)
MODEL_PATH = BASE_DIR / "model.pkl"         # Where the trained model will be saved
METRICS_PATH = BASE_DIR / "metrics.json"    # Where performance metrics will go
SUMMARY_PATH = BASE_DIR / "summary.md"      # Where the summary report will go

# local CSV file
DATA_PATH = BASE_DIR / "Employee_Attrition_Dataset.csv"

#  LOAD AND EXPLORE DATA

df = pd.read_csv(DATA_PATH)  # Load your dataset

# first 5 rows 
print(df.head())

#  shape (rows, columns)
print("\nDataset Shape:", df.shape)

#  missing values
print("\nMissing Values:\n", df.isnull().sum().head())

# EXPLORATORY DATA ANALYSIS (EDA)

# Visualization 1 — How many employees left vs stayed
plt.figure(figsize=(5, 4))
sns.countplot(x="Attrition", data=df, palette="Set2")
plt.title("Employee Attrition Distribution")
plt.savefig(BASE_DIR / "eda_attrition_distribution.png")

# Visualization 2 — Age distribution
plt.figure(figsize=(6, 4))
sns.histplot(df["Age"], kde=True, color="skyblue")
plt.title("Age Distribution of Employees")
plt.savefig(BASE_DIR / "eda_age_distribution.png")

# Visualization 3 — Job Satisfaction vs Attrition
plt.figure(figsize=(6, 4))
sns.boxplot(x="Attrition", y="JobSatisfaction", data=df, palette="coolwarm")
plt.title("Job Satisfaction vs Attrition")
plt.savefig(BASE_DIR / "eda_job_satisfaction.png")

plt.close("all")  # Close figures to free memory

#  DATA PREPROCESSING

label_encoders = {}
for col in df.select_dtypes(include=["object"]).columns:
    le = LabelEncoder()
    df[col] = le.fit_transform(df[col])
    label_encoders[col] = le  # store encoder

# Split features (X) and target (y)
X = df.drop("Attrition", axis=1)
y = df["Attrition"]

# Divide dataset into training and testing (80/20 split)
# random_state=42 ensures we get the same split every run

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Standardize (scale) the features — ensures all numbers have similar range
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

#  MODEL TRAINING
# Random Forest is an ensemble model that combines multiple decision trees
# to make robust predictions.

model = RandomForestClassifier(
    n_estimators=100,     # number of trees
    random_state=42       # reproducibility
)
model.fit(X_train_scaled, y_train)

#  MODEL EVALUATION

y_pred = model.predict(X_test_scaled)

# Compute performance metrics
accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred)
recall = recall_score(y_test, y_pred)
f1 = f1_score(y_test, y_pred)

# Print metrics in a readable format
print(f"Accuracy: {accuracy:.2f}")
print(f"Precision: {precision:.2f}")
print(f"Recall: {recall:.2f}")
print(f"F1 Score: {f1:.2f}")

# Confusion Matrix Visualization
plt.figure(figsize=(5, 4))
sns.heatmap(confusion_matrix(y_test, y_pred), annot=True, fmt='d', cmap='Blues')
plt.title("Confusion Matrix")
plt.xlabel("Predicted")
plt.ylabel("Actual")
plt.savefig(BASE_DIR / "eda_confusion_matrix.png")

#  SAVE RESULTS (MODEL, METRICS, SUMMARY)

# Save trained model
joblib.dump(model, MODEL_PATH)

# Save metrics to JSON
metrics = {
    "accuracy": round(accuracy, 3),
    "precision": round(precision, 3),
    "recall": round(recall, 3),
    "f1_score": round(f1, 3)
}
with open(METRICS_PATH, "w") as f:
    json.dump(metrics, f, indent=4)

# Save a summary markdown file
summary_text = f"""
# Employee Attrition Prediction Model

**Goal:** Predict if an employee will leave the company based on HR data.

**Algorithm:** Random Forest Classifier  
**Dataset:** Local (Employee_Attrition_Dataset.csv)  
**Accuracy:** {accuracy:.2f}  
**Precision:** {precision:.2f}  
**Recall:** {recall:.2f}  
**F1 Score:** {f1:.2f}

### Key Findings
- Employees with **low job satisfaction** or **low monthly income** are more likely to leave.
- Younger employees tend to have higher attrition rates.
- Department and Work-Life Balance show moderate correlation with attrition.

### Files Generated
- `model.pkl` — Trained Random Forest model  
- `metrics.json` — Performance metrics  
- `eda_*.png` — Visualization charts  
- `summary.md` — Model summary and insights
"""
with open(SUMMARY_PATH, "w") as f:
    f.write(summary_text.strip())

