import React from "react";
import ProjectTemplate from "./ProjectTemplate";

const RealEstateProject = () => {
  return (
    <ProjectTemplate
      title="Real Estate Price Prediction"
      industry="Real Estate"
      problem="Estimating property prices based on features like location, size, and amenities."
      dataset="Open dataset of housing market data."
      models={["Linear Regression", "XGBoost"]}
      results="XGBoost outperformed Linear Regression in capturing market trends."
    />
  );
};

export default RealEstateProject;