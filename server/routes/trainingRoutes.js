import express from "express";
import Training from "../models/Training.js";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { modelName, datasetLink, epochs, outputFormat, fileName } = req.body;

    // Save to MongoDB
    const newTraining = new Training({ modelName, datasetLink, epochs, outputFormat, fileName });
    await newTraining.save();

    // Send Email Notification
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // send to yourself
      subject: "New Training Setup Submitted",
      text: `
        🧠 A new training setup has been completed!
        Model: ${modelName}
        Dataset: ${datasetLink || fileName || "File Upload"}
        Epochs: ${epochs}
        Output: ${outputFormat}
      `,
    });

    res.status(200).json({ message: "Training setup saved and email sent!" });
  } catch (error) {
    console.error("Error saving training setup:", error);
    res.status(500).json({ message: "Server error, please try again." });
  }
});

export default router;