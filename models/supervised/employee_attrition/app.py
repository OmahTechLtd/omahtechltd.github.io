# demo_app.py
import gradio as gr
import joblib
import pandas as pd

# Load model 
model = joblib.load("model.pkl")   

def predict_attrition(age, monthly_income, years_at_company):
    X = pd.DataFrame([{
        "Age": age,
        "MonthlyIncome": monthly_income,
        "YearsAtCompany": years_at_company
    }])
    proba = model.predict_proba(X)[0][1] if hasattr(model, "predict_proba") else None
    pred = int(model.predict(X)[0])
    return {
        "prediction": "Likely to leave" if pred == 1 else "Likely to stay",
        "probability": f"{proba:.3f}" if proba is not None else "N/A"
    }

demo = gr.Interface(
    fn=predict_attrition,
    inputs=[
        gr.Number(label="Age", value=30),
        gr.Number(label="Monthly Income", value=50000),
        gr.Number(label="Years at Company", value=2)
    ],
    outputs=[
        gr.JSON(label="Result")
    ],
    title="Employee Attrition Demo",
    description="Interactive demo for employee attrition prediction."
)

if __name__ == "__main__":
    demo.launch(server_name="0.0.0.0", server_port=7860, share=False)