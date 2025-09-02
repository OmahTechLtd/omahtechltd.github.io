import React from "react";
import ProjectTemplate from "./ProjectTemplate";

const RealEstateProject = () => {
  return (
    <ProjectTemplate
      title="Real Estate Price Prediction (Nigeria)"
      industry="Real Estate"
      problem="Estimating property prices in Nigeria based on features like location, size, and amenities."
      dataset="Houses listings in Nigeria with 24,326 entries across multiple towns and states."
      models={["Linear Regression", "Random Forest", "XGBoost"]}
      results="XGBoost achieved the lowest RMSE and highest R² score, with location and number of bedrooms as key predictors."
      description="This project uses a Nigerian housing dataset to train machine learning models to predict property prices based on features such as number of bedrooms, bathrooms, toilets, parking space, property type, town, and state."
    />
  );
};

export default RealEstateProject;