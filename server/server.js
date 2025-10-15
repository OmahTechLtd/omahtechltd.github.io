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
// robust chat route (replace your current /chat handler with this)
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message || !message.trim()) {
    return res.status(400).json({ reply: "Please send a non-empty message." });
  }

  try {
    const MODEL = process.env.HF_MODEL || "tiiuae/falcon-7b-instruct"; // fallback model id (change as needed)
    const HF_URL = `https://api-inference.huggingface.co/models/${MODEL}`;

    const hfResponse = await fetch(HF_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: message,
        parameters: { max_new_tokens: 150, temperature: 0.7 },
      }),
      // keep timeout handling in mind for prod (node-fetch/undici options)
    });

    // Log status and headers for debugging
    console.log("HF status:", hfResponse.status);
    console.log("HF headers:", Object.fromEntries(hfResponse.headers.entries()));

    // Read raw text (we will attempt JSON parse only if Content-Type is json)
    const raw = await hfResponse.text();
    console.log("🧠 HF raw text:", raw);

    // If not ok (4xx/5xx), return a detailed error to logs & user
    if (!hfResponse.ok) {
      console.error("Hugging Face returned non-OK status:", hfResponse.status, raw);
      return res.status(502).json({
        reply: "Model error: upstream model returned an error. See logs for details."
      });
    }

    // Try parse JSON if content-type suggests JSON
    const contentType = hfResponse.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      let data;
      try {
        data = JSON.parse(raw);
      } catch (err) {
        console.error("Failed to JSON.parse HF response:", err, raw);
        return res.status(502).json({ reply: "Model returned invalid JSON. Check server logs." });
      }

      // HF JSON result can vary by model. Try common locations:
      const reply =
        // many HF text-generation models return array of objects
        (Array.isArray(data) && (data[0]?.generated_text || data[0]?.summary_text)) ||
        // some return object with 'generated_text' directly
        data.generated_text ||
        // some models return { outputs: [...] }
        (data.outputs && data.outputs[0]?.generated_text) ||
        // fallback
        null;

      if (!reply) {
        console.error("HF JSON parsed but no reply found:", JSON.stringify(data).slice(0, 1000));
        return res.status(502).json({ reply: "Upstream model returned no text. See server logs." });
      }

      return res.json({ reply });
    } else {
      // Content-type is not JSON (maybe 'Not Found' HTML). Log and return generic message.
      console.error("HF returned non-JSON response:", raw.slice(0, 1000));
      return res.status(502).json({ reply: "Model returned non-JSON response. Check server logs." });
    }
  } catch (error) {
    console.error("Chatbot error (fetch):", error);
    res.status(500).json({ reply: "Server error while contacting model." });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));