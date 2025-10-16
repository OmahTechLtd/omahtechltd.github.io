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
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    // Try OpenAI first
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are OmahTech’s helpful AI assistant." },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0].message.content;
    return res.json({ reply });
  } catch (error) {
    console.error("⚠️ OpenAI failed, switching to Hugging Face:", error.message);

    try {
      // Fallback: Hugging Face Zephyr 7B
      const hfResponse = await fetch(
        "https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.HF_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: `User: ${message}\nAI:`,
            parameters: { max_new_tokens: 200, temperature: 0.7 },
          }),
        }
      );

      const data = await hfResponse.json();
      console.log("🧠 HF raw:", data);

      let reply = "";

      if (Array.isArray(data) && data[0]?.generated_text) {
        reply = data[0].generated_text.replace(/^User:.*?AI:/s, "").trim();
      } else if (data?.generated_text) {
        reply = data.generated_text;
      } else if (data?.error) {
        reply = `⚠️ Hugging Face error: ${data.error}`;
      } else {
        reply = "⚠️ Sorry, I couldn’t generate a response right now.";
      }

      return res.json({ reply });
    } catch (hfError) {
      console.error("🔥 Hugging Face fallback also failed:", hfError);
      return res.status(500).json({
        reply: "⚠️ Both OpenAI and Hugging Face failed to respond.",
      });
    }
  }
});

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));