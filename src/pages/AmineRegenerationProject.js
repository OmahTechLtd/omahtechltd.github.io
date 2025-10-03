import React from "react";
import ProjectTemplate from "./ProjectTemplate";

// Images for EDA and results
import correlationHeatmap from "../assets/amine/eda/correlation_heatmap.png";
import reboilerDutyDist from "../assets/amine/eda/reboiler_duty_dist.png";
import featureImportance from "../assets/amine/eda/feature_importance.png";

export default function AmineProject() {
  return (
    <ProjectTemplate
      title="Amine Regeneration: Process Simulation & Prediction"
      industry="Chemical Engineering"
      problem="Predicting energy consumption and detecting foaming/fouling in Amine Regeneration Units (ARU) using Aspen HYSYS simulation data."
      dataset="We used simulated process data exported from Aspen HYSYS, covering key process parameters such as lean amine temperature, pressure, reboiler duty, circulation rate, and CO₂ loading."
      models={["Linear Regression (baseline)", "Random Forest Regressor (improved accuracy)"]}
      results="Random Forest outperformed Linear Regression, achieving higher R² and lower RMSE in predicting reboiler duty. This demonstrates how AI can optimize energy efficiency and reliability in gas sweetening operations."
      charts={[
        { title: "Correlation Heatmap", src: correlationHeatmap },
        { title: "Reboiler Duty Distribution", src: reboilerDutyDist },
        { title: "Feature Importance (Random Forest)", src: featureImportance },
      ]}
      links={[
        { label: "View Live Dashboard", url: "https://omahtechltd-amine-dashboard.streamlit.app/" }
      ]}
      ctaNote="Explore how AI can enhance process optimization in amine regeneration."
    />
  );
}