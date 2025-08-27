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
    />
  );
}