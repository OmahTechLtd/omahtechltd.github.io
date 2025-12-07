import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Subscriber from "./models/Subscriber.js";
import trainingSetupRoutes from "./routes/trainingSetup.js";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { Resend } from "resend";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();
app.use((req, res, next) => {
  const allowedOrigins = [
    "https://omahtech.co",
    "https://www.omahtech.co",
    "http://localhost:3000",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure uploads folder exists
if (!fs.existsSync(path.join(__dirname, "uploads"))) {
  fs.mkdirSync(path.join(__dirname, "uploads"));
}

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/training-setup", trainingSetupRoutes); // for training routes

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
//  Researcher Consultation Route (Resend)
// ---------------------------
app.post("/researcher", async (req, res) => {
  try {
    const {
      model,
      dataset_category,
      problem_statement,
      file_name,
      source,
      timestamp
    } = req.body;

    if (!problem_statement || problem_statement.trim() === "") {
      return res.status(400).json({ message: "Problem statement is required" });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_SENDER,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Researcher Consultation Request – ${model || "Custom Model"}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Model Type:</strong> ${model || "N/A"}</p>
        <p><strong>Dataset Category:</strong> ${dataset_category || "N/A"}</p>
        <p><strong>File Name:</strong> ${file_name || "None"}</p>
        <p><strong>Source:</strong> ${source || "Website"}</p>
        <p><strong>Time:</strong> ${timestamp || new Date().toISOString()}</p>
        <hr />
        <h3>Problem Statement</h3>
        <p>${problem_statement}</p>
      `
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ message: "Failed to send email via Resend" });
    }

    res.status(200).json({ message: "Consultation request sent successfully", data });

  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ---------------------------
//  Organization Consultation Route (Resend)
// ---------------------------
app.post("/organization", async (req, res) => {
  try {
    const {
      name,
      email,
      company,
      message,
      source,
      timestamp
    } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({ message: "Problem statement is required" });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_SENDER,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Organization Consultation Request – ${model || "Custom Model"}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Source:</strong> ${source || "Website"}</p>
        <p><strong>Time:</strong> ${timestamp || new Date().toISOString()}</p>
        <hr />
        <h3>Message</h3>
        <p>${message}</p>
      `
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ message: "Failed to send email via Resend" });
    }

    res.status(200).json({ message: "Consultation request sent successfully", data });

  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ---------------------------
//  Start the Server
// ---------------------------
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));