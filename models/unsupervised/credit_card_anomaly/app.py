import gradio as gr
import joblib
import pandas as pd

model = joblib.load("model.pkl")  

def detect_anomaly(amount, transaction_hour, feature_x):
    X = pd.DataFrame([{
        "Amount": amount,
        "Hour": transaction_hour,
        "FeatureX": feature_x
    }])
    
    label = model.predict(X)[0]
    score = None
    if hasattr(model, "decision_function"):
        score = float(model.decision_function(X)[0])
    is_anomaly = bool(label == 1 or label == -1)  
    return {
        "anomaly": is_anomaly,
        "score": score
    }

demo = gr.Interface(
    fn=detect_anomaly,
    inputs=[
        gr.Number(label="Transaction Amount", value=100.0),
        gr.Number(label="Hour of transaction (0-23)", value=14),
        gr.Number(label="Feature X (example)", value=0.4)
    ],
    outputs=[gr.JSON(label="Anomaly Result")],
    title="Credit Card Anomaly Demo",
    description="Detects suspicious transactions."
)

if __name__ == "__main__":
    demo.launch(server_name="0.0.0.0", server_port=7861, share=False)