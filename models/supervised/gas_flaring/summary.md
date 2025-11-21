# Gas Flaring Prediction Model

**Goal:** Predict Total Gas Flared (MMSCF) using multi-year Nigerian gas production data.

**Algorithm:** Random Forest Regressor  
**Dataset:** Annual Gas Production (2020–2025)  
**R² Score:** 0.501  
**MAE:** 1470.535  
**RMSE:** 1983.821

### Key Findings
- Gas flaring correlates strongly with total gas production and export sales.  
- Domestic sales and field use reduce overall flaring.  
- Seasonal variations exist, with higher flaring in early months.

### Files Generated
- `model.pkl` — Trained Random Forest Regressor  
- `metrics.json` — Model performance metrics  
- `eda_*.png` — Visual insights  
- `summary.md` — Model summary and findings