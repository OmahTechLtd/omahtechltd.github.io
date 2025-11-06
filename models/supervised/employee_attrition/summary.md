# Employee Attrition Prediction Model

**Goal:** Predict if an employee will leave the company based on HR data.

**Algorithm:** Random Forest Classifier  
**Dataset:** Local (Employee_Attrition_Dataset.csv)  
**Accuracy:** 0.83  
**Precision:** 0.38  
**Recall:** 0.11  
**F1 Score:** 0.17

### Key Findings
- Employees with **low job satisfaction** or **low monthly income** are more likely to leave.
- Younger employees tend to have higher attrition rates.
- Department and Work-Life Balance show moderate correlation with attrition.

### Files Generated
- `model.pkl` — Trained Random Forest model  
- `metrics.json` — Performance metrics  
- `eda_*.png` — Visualization charts  
- `summary.md` — Model summary and insights