import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Subscriber from "./models/Subscriber.js";
import { HfInference } from "@huggingface/inference";

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
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
const response = await fetch("https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct", 
    {      
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: message,
        parameters: { max_new_tokens: 100, temperature: 0.7 },
      }),
    });

    // if model not found or Hugging Face down, log response
    const text = await response.text();
    console.log("🧠 HF raw text:", text);

    // try parsing JSON
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.error("Invalid JSON:", text);
      return res.status(500).json({ reply: "⚠️ Model returned invalid response." });
    }

    // extract reply
    const reply = data?.[0]?.generated_text || "Sorry, I couldn’t generate a response right now.";
    res.json({ reply });
  } catch (error) {
    console.error("Chatbot error (fetch):", error);
    res.status(500).json({ reply: "Server error while contacting model." });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));