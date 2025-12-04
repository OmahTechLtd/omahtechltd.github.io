# Reboiler Duty Prediction Model

Goal: Predict reboiler duty using amine system operating variables.

Algorithm: XGBoost Regressor
Dataset: amine_gen_data.csv
Target: stripper_-_spec_value_duty

Results:
R²: 0.9998
MAE: 15676.3901
RMSE: 40682.0564

Notes:
- Numeric features: 11
- Categorical features (one-hot encoded): 0
- Train/test split: 39932 train / 9983 test

Files generated:
- model.pkl (XGBoost model)
- scaler.pkl (preprocessor pipeline: scaler + OHE saved via joblib)
- metrics.json
- summary.md
- eda/*.png