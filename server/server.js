import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Subscriber from "./models/Subscriber.js";
import nodemailer from "nodemailer"; // For backend email notification

dotenv.config();

const app = express();
app.use(
  cors({
    origin: [
      "https://omahtech.co",
      "https://www.omahtech.co",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);
app.use(express.json());

// ---------------------------
//  Connect to MongoDB
// ---------------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(" Connected to MongoDB Atlas"))
  .catch((err) => console.error(" MongoDB connection error:", err));

// ---------------------------
//  Root route
// ---------------------------
app.get("/", (req, res) => {
  res.send("Server is live ");
});

// ---------------------------
//  Subscribe Route
// ---------------------------
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  console.log(" Incoming email:", email);

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    console.log(" Email saved successfully");
    res.status(200).json({ message: "Subscribed successfully" });
  } catch (error) {
    console.error(" Error saving subscriber:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ---------------------------
//  Training Setup Route
// ---------------------------
app.post("/training-setup", async (req, res) => {
  const { name, email, trainingType, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required." });
  }

  try {
    //  Save to MongoDB
    const Training = mongoose.model(
      "Training",
      new mongoose.Schema({
        name: String,
        email: String,
        trainingType: String,
        message: String,
        date: { type: Date, default: Date.now },
      })
    );
    await new Training({ name, email, trainingType, message }).save();

    console.log(" Training info saved to MongoDB");

    //  Send email notification (to your admin inbox)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // your Gmail App Password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER, // your email
      subject: " New Training Enrollment",
      text: `New training enrollment received:

Name: ${name}
Email: ${email}
Training Type: ${trainingType}
Message: ${message || "N/A"}

Check MongoDB for details.`,
    };

    await transporter.sendMail(mailOptions);
    console.log(" Notification email sent to admin.");

    res.status(200).json({
      message: "Training setup saved and email sent successfully!",
    });
  } catch (error) {
    console.error("Error saving training setup:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ---------------------------
//  Start the Server
// ---------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));