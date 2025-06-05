const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const fetch = require("node-fetch"); // required to call Gemini API
require("dotenv").config(); // <-- load .env file

const authRouter = require("./routes/authRoute");
const userRouter = require("./routes/routes");

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

// Routes
app.use("/User", userRouter);
app.use("/loginUser", authRouter);
console.log("API_KEY:", process.env.API_KEY);
console.log("API_KEY:", process.env.API_KEY);
// ✅ New secure API proxy route
app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;
  const API_KEY = process.env.API_KEY;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: userMessage }] }]
      })
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error from Gemini API:", err);
    res.status(500).json({ error: err.message });
  }
});

mongoose.connect("mongodb://localhost:27017/ai-chatbot")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
