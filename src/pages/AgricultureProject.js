import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import yield_distribution_by_product from "../assets/agric/eda/yield_distribution_by_product.png";
import area_vs_production from "../assets/agric/eda/area_vs_production.png";
import correlation_heatmap from "../assets/agric/eda/correlation_heatmap.png";
import top_products_by_yield from "../assets/agric/eda/top_products_by_yield.png";
import feature_importance from "../assets/agric/eda/feature_importance.png";

const AgricultureProject = () => {
  return (
    <ProjectTemplate
      title="Agricultural Yield Forecasting"
      industry="Agriculture"
      problem="Forecasting crop yields using soil, weather, and satellite data."
      dataset="Nigerian agriculture dataset from HarvestChoice Subnational Yields, including detailed crop production and climate variables."
      models={["Linear Regression", "Random Forest"]}
      results="Linear Regression R² ≈ 0.46, RMSE ≈ 3.16; Random Forest R² ≈ 0.74, RMSE ≈ 2.19"
      charts={[
        { title: "Yield Distribution by Product", src: yield_distribution_by_product },
        { title: "Area vs Production", src: area_vs_production },
        { title: "Correlation Heatmap", src: correlation_heatmap },
        { title: "Top Products by Yield", src: top_products_by_yield },
        { title: "Feature Importance", src: feature_importance },
      ]}
      links={[
        { label: "View Live Dashboard", url: "https://omahtechltd-agricdashboard-app-s7wsnt.streamlit.app/" }
      ]}
      ctaNote="Try out the AI model to forecast agricultural yields and optimize crop production."
    />
  );
};

export default AgricultureProject;