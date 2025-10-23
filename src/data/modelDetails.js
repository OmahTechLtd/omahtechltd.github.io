const modelDetails = {
  "Linear Regression": {
    useCase: "Predict continuous values such as prices, trends, or scores.",
    strengths: "Simple, interpretable, and works well with small tabular datasets.",
    sampleDatasets: ["Boston Housing", "Startup Profits", "Salary Prediction"],
  },
  "Gradient Boosting Machines": {
    useCase: "Advanced prediction for structured numerical data.",
    strengths: "Handles large datasets and complex relationships effectively.",
    sampleDatasets: ["Energy Consumption", "Sales Forecasting"],
  },
  "Random Forest": {
    useCase: "Classification for tabular and mixed data types.",
    strengths: "Robust to noise, good for feature importance insights.",
    sampleDatasets: ["Loan Default", "Churn Prediction"],
  },
  "Transformer Models": {
    useCase: "Text classification, sentiment analysis, or summarization.",
    strengths: "Excels at understanding language context and semantics.",
    sampleDatasets: ["IMDB Reviews", "Twitter Sentiment"],
  },
  "Convolutional Neural Networks": {
    useCase: "Image recognition, detection, and classification.",
    strengths: "Great at learning visual patterns and spatial hierarchies.",
    sampleDatasets: ["MNIST", "CIFAR-10", "ImageNet"],
  },
  "K-Means Clustering": {
    useCase: "Unsupervised segmentation of customers, products, or behaviors.",
    strengths: "Fast, easy to interpret, works well for quick exploratory grouping.",
    sampleDatasets: ["Customer Segmentation", "Market Basket Analysis"],
  },
  "Reinforcement Learning Agents": {
    useCase: "Learning optimal decisions through trial and error.",
    strengths: "Ideal for games, simulations, and adaptive control systems.",
    sampleDatasets: ["OpenAI Gym", "CartPole", "MountainCar"],
  },
};
export default modelDetails;