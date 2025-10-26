import mongoose from "mongoose";

const trainingSetupSchema = new mongoose.Schema({
  modelName: String,
  datasetLink: String,
  fileName: String,
  epochs: Number,
  outputFormat: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("TrainingSetup", trainingSetupSchema);