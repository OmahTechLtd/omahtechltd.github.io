const modelDetails = {
  "Linear Regression": {
    useCase: "Predict continuous numerical values like prices, trends, or scores.",
    strengths: "Simple, interpretable, fast to train, and works well with smaller tabular datasets.",
    sampleDatasets: ["Boston Housing", "Startup Profits", "Salary Prediction"],
  },
  "Gradient Boosting Machines": {
    useCase: "Advanced prediction for structured numerical data, especially for large datasets.",
    strengths: "Captures complex relationships, reduces bias and variance, and delivers high accuracy.",
    sampleDatasets: ["Sales Forecasting", "Energy Consumption", "House Price Prediction"],
  },
  "Recurrent Neural Networks": {
    useCase: "Time-series prediction and sequential data processing (e.g., text, signals).",
    strengths: "Handles sequence-based dependencies and temporal patterns in data.",
    sampleDatasets: ["Stock Market Trends", "Weather Forecasting", "Text Sentiment Sequences"],
  },
  "Neural Networks": {
    useCase: "Predict numerical or categorical outcomes from diverse data types (text, images, tabular).",
    strengths: "Highly flexible and adaptable to a wide range of data formats and tasks.",
    sampleDatasets: ["Synthetic Mixed Data", "Healthcare Predictions", "Custom CSV Inputs"],
  },
  "Convolutional Neural Networks": {
    useCase: "Image recognition, object detection, and classification.",
    strengths: "Excellent at identifying visual features and spatial hierarchies.",
    sampleDatasets: ["MNIST", "CIFAR-10", "ImageNet"],
  },
  "Transformer Models": {
    useCase: "Natural language processing tasks such as classification, translation, or summarization.",
    strengths: "Understands long-range dependencies in text and produces context-aware outputs.",
    sampleDatasets: ["IMDB Reviews", "Twitter Sentiment", "AG News"],
  },
  "Random Forest": {
    useCase: "Classification and regression for structured or mixed data.",
    strengths: "Handles noise and nonlinearity well; provides insights into feature importance.",
    sampleDatasets: ["Loan Default", "Bank Churn", "Customer Satisfaction"],
  },
  "K-Means Clustering": {
    useCase: "Unsupervised segmentation of data points (e.g., customers, products, or behaviors).",
    strengths: "Simple, fast, and interpretable clustering algorithm for exploratory analysis.",
    sampleDatasets: ["Customer Segmentation", "Market Basket Analysis", "User Behavior Clustering"],
  },
  "Reinforcement Learning Agents": {
    useCase: "Learning optimal actions through trial and error in dynamic environments.",
    strengths: "Ideal for adaptive control, robotics, and game-based decision systems.",
    sampleDatasets: ["OpenAI Gym", "CartPole", "MountainCar"],
  },
};

export default modelDetails;