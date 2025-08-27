import React from "react";
import ProjectTemplate from "./ProjectTemplate";

const AgricultureProject = () => {
  return (
    <ProjectTemplate
      title="Agricultural Yield Forecasting"
      industry="Agriculture"
      problem="Forecasting crop yields using soil, weather, and satellite data."
      dataset="Public datasets on crop yields and climate data."
      models={["Decision Tree", "Random Forest"]}
      results="Random Forest provided more robust yield predictions under variable conditions."
    />
  );
};

export default AgricultureProject;