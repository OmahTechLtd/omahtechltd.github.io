import express from "express";
import multer from "multer";
import TrainingSetup from "../models/TrainingSetup.js";
import nodemailer from "nodemailer";

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// POST route to handle training setup submission
router.post("/", upload.single("datasetFile"), async (req, res) => {
    try {
      console.log("📥 Incoming training setup:", req.body);
      console.log("📎 Uploaded file:", req.file);
    const { modelName, datasetLink, epochs, outputFormat } = req.body;
    const fileName = req.file ? req.file.filename : null;

    const newTraining = new TrainingSetup({
      modelName,
      datasetLink,
      fileName,
      epochs,
      outputFormat,
    });

    await newTraining.save();

    // Send email notification
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: "New Model Training Submission",
      text: `New training setup received:\n\nModel: ${modelName}\nDataset: ${
        datasetLink || "File upload"
      }\nEpochs: ${epochs}\nFormat: ${outputFormat}\n\nFile: ${fileName || "N/A"}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Training setup saved and email sent" });
  } catch (error) {
    console.error("Error saving training setup:", error);
    res.status(500).json({ message: "Failed to save training setup" });
  }
});

export default router;