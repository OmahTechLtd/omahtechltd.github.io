import React from "react";
import ProjectTemplate from "./ProjectTemplate";

export default function OilAndGas() {
  return (
    <ProjectTemplate
      title="Oil & Gas: Equipment Failure Prediction"
      industry="Oil & Gas"
      problem="Predicting equipment failures using sensor data to minimize downtime and improve maintenance planning."
      dataset="We used the AI4I 2020 Predictive Maintenance Dataset (UCI Machine Learning Repository). It contains 10,000 records of machine sensor readings with failure labels. Features include torque, tool wear, air temperature, and process temperature."
      models={[
        "Logistic Regression (baseline)",
        "Random Forest (stronger, handles nonlinearities)"
      ]}
      results="Random Forest achieved ~92% accuracy with better recall on failure cases compared to Logistic Regression. This demonstrates how predictive maintenance can reduce unexpected breakdowns in oil & gas operations."
      charts={[
        { title: "Correlation Heatmap", src: "/assets/oilgas/eda/correlation_heatmap.png" },
        { title: "Failure Type Distribution", src: "/assets/oilgas/eda/Machine_failure_dist.png" },
        { title: "Confusion Matrix (Binary)", src: "/assets/oilgas/binary/confusion_matrix_binary.png" },
        { title: "Confusion Matrix (Multiclass)", src: "/assets/oilgas/multiclass/confusion_matrix_multi.png" },
        { title: "Feature Importance (Random Forest)", src: "/assets/oilgas/binary/feature_importance.png" }
      ]}
      links={[
        { label: "View Live Dashboard", url: "https://omahtechltd-oil-gas-dashboard-app-uly6nd.streamlit.app/" }
      ]}
      ctaNote="Test our AI model and predict equipment failures interactively."
    />
  );
}