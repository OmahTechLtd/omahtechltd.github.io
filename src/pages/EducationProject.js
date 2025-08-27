import React from "react";
import ProjectTemplate from "./ProjectTemplate";

const EducationProject = () => {
  return (
    <ProjectTemplate
      title="Student Performance Prediction"
      industry="Education"
      problem="Predicting student exam outcomes based on study habits, attendance, and background data."
      dataset="Student performance datasets from educational institutions."
      models={["Logistic Regression", "Support Vector Machine"]}
      results="SVM achieved stronger accuracy than Logistic Regression in identifying at-risk students."
    />
  );
};

export default EducationProject;