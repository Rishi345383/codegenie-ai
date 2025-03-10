


import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config(); // Load API key from .env file

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;

app.post("/api/generate", async (req, res) => {
  const { text } = req.body;
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY; // Load API key

  if (!text) {
    return res.status(400).json({ error: "No input provided" });
  }

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: `Generate code for: ${text}` }] }]
      },
      { headers: { "Content-Type": "application/json" } }
    );

    // Extract AI-generated output
    const aiResponse =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from AI.";

    res.json({ output: aiResponse });
  } catch (error) {
    console.error("AI API error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to communicate with AI API" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
