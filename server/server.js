import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Subscriber from "./models/Subscriber.js";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: [
      "https://omahtech.co",            // ✅ Production domain
      "https://www.omahtech.co",        // Optional www
      "http://localhost:3000",          // ✅ Local testing
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);
app.use(express.json());

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Root route
app.get("/", (req, res) => {
  res.send("Server is live ✅");
});

// ---------------------------
// 📩 Subscribe Route
// ---------------------------
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  console.log("📩 Incoming email:", email);

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    console.log("✅ Email saved successfully");
    res.status(200).json({ message: "Subscribed successfully" });
  } catch (error) {
    console.error("❌ Error saving subscriber:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ---------------------------
// 🤖 Chatbot Route
// ---------------------------
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message || message.trim() === "") {
    return res.status(400).json({ reply: "⚠️ Please enter a message." });
  }

  try {
    // Try OpenAI first
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are OmahTech’s friendly and helpful AI assistant." },
        { role: "user", content: message },
      ],
    });

    const reply =
      completion.choices?.[0]?.message?.content?.trim() ||
      "⚠️ No response received from OpenAI.";
    return res.json({ reply });

  } catch (openaiError) {
    console.error("⚠️ OpenAI failed:", openaiError.message);

    // ---------------------------
    // 🧠 Fallback to Hugging Face Space
    // ---------------------------
    try {
      const hfResponse = await fetch(
        "https://veraeze-omahtech-chatbot.hf.space/chat", // Your Hugging Face Space URL
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        }
      );

      if (!hfResponse.ok) {
        const text = await hfResponse.text();
        console.error("❌ HF Space response error:", text);
        throw new Error(`Hugging Face returned ${hfResponse.status}`);
      }

      const data = await hfResponse.json();
      const reply =
        data.reply ||
        data.generated_text ||
        "⚠️ Hugging Face Space returned no message.";

      return res.json({ reply });
    } catch (hfError) {
      console.error("🔥 Hugging Face fallback failed:", hfError.message);
      return res.status(500).json({
        reply: "⚠️ Both OpenAI and Hugging Face failed to respond.",
      });
    }
  }
});

// ---------------------------
// 🚀 Start the Server
// ---------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));