import express from "express";
import multer from "multer";
import TrainingSetup from "../models/TrainingSetup.js";
import { Resend } from "resend";


const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// POST route to handle training setup submission
// POST route to handle training setup submission
router.post("/", upload.single("datasetFile"), async (req, res) => {
  try {
    console.log("📥 Incoming training setup:", req.body);
    console.log("📎 Uploaded file:", req.file);
    const { modelName, epochs, outputFormat, problemStatement } = req.body; // Removed datasetLink from destructuring
    const fileName = req.file ? req.file.filename : null;

    const fileSizeMB = req.file ? req.file.size / (1024 * 1024) : 0;
    let datasetSizeLabel = "small";
    if (fileSizeMB > 5 && fileSizeMB <= 50) datasetSizeLabel = "medium";
    else if (fileSizeMB > 50) datasetSizeLabel = "large";

    // Generate unique trainingId
    const trainingId = `TSET-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    const newTraining = new TrainingSetup({
      modelName,
      fileName,
      epochs,
      outputFormat,
      problemStatement, // new field
      datasetSize: datasetSizeLabel,
      trainingId, // Added trainingId to saved data
    });

    await newTraining.save();

    // Send email notification using Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "vera@omahtech.co",
      to: process.env.EMAIL_RECEIVER,
      subject: "New Model Training Submission",
      text: `Training ID: ${trainingId}

Model: ${modelName}
File: ${fileName || "N/A"}
Epochs: ${epochs}
Output Format: ${outputFormat}

🧠 Problem Statement:
${problemStatement || "No problem statement provided."}
`,
    });

    res.status(200).json({ message: "Training setup saved and email sent", datasetSize: datasetSizeLabel, trainingId }); // Added trainingId to response
  } catch (error) {
    console.error(" Error saving training setup or sending email:");
    console.error(error.stack || error.message || error);
    res.status(500).json({ message: "Failed to save training setup", error: error.message });
  }
});

export default router;