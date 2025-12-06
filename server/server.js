import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Subscriber from "./models/Subscriber.js";
import trainingSetupRoutes from "./routes/trainingSetup.js";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

dotenv.config();

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
//  Start the Server
// ---------------------------
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));