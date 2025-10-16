import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Subscriber from "./models/Subscriber.js";
import { HfInference } from "@huggingface/inference";
import OpenAI from "openai";


dotenv.config();

const app = express();
app.use(
  cors({
    origin: [
      "https://omahtech.co",            // ✅ your production frontend domain
      "https://www.omahtech.co",        // optional www
      "http://localhost:3000",          // ✅ for local React testing
    ],
    methods: ["GET", "POST", "OPTIONS"], // ✅ include OPTIONS for preflight
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is live ✅");
});

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

// API subscribe route
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  console.log("📩 Incoming email:", email); 

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    console.log(" Email saved successfully"); // 👈 Add this too
    res.status(200).json({ message: "Subscribed successfully" });
  } catch (error) {
    console.error(" Error saving subscriber:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// AI Chat route
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // free and fast
      messages: [
        { role: "system", content: "You are OmahTech’s helpful AI assistant." },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error("Chatbot error (OpenAI):", error);
    res.status(500).json({
      reply: "⚠️ Server error while generating a response.",
    });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));