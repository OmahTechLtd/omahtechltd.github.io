import React from "react";
import ProjectTemplate from "./ProjectTemplate";

// images
import logPriceDist from "../assets/realestate/eda/log_price_distribution.png";
import avgPriceTown from "../assets/realestate/eda/top_towns_avg_price.png";
import correlationHeatmap from "../assets/realestate/eda/correlation_heatmap.png";
import stateListing from "../assets/realestate/eda/state_listing_counts.png";
import featureImportance from "../assets/realestate/eda/feature_importance.png";

export default function RealEstate() {
  return (
    <ProjectTemplate
      title="Real Estate: Nigerian House Price Prediction"
      industry="Real Estate"
      problem="Predicting house prices in Nigeria to help investors and buyers make data-driven decisions."
      dataset="We used a dataset of Nigerian house listings with features such as bedrooms, bathrooms, parking space, state, and town. This dataset was preprocessed with one-hot encoding and scaling for model readiness."
      models={[
        "Linear Regression (baseline)",
        "Random Forest (final production model)"
      ]}
      results="Linear Regression slightly outperformed Random Forest in this dataset. 
              Linear Regression achieved an R² score of 0.6102 with an RMSE of 0.75, while 
              Random Forest achieved an R² score of 0.5885 and an RMSE of 0.77."
      charts={[
  { title: "Log Price Distribution", src: logPriceDist },
  { title: "Average Price by Town", src: avgPriceTown },
  { title: "Correlation Heatmap", src: correlationHeatmap },
  { title: "State Listing", src: stateListing },
  { title: "Feature Importance", src: featureImportance },
]}
      links={[
        { label: "View Live Dashboard", url: "https://omahtechltd-realestatedashboard-app-sbbi57.streamlit.app/" }
      ]}
      ctaNote="Explore the dashboard to estimate property prices interactively."
    />
  );
}