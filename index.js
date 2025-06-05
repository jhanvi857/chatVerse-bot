const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");  // <-- require cors package
const authRouter = require("./routes/authRoute");
const userRouter = require("./routes/routes");

const app = express();
const PORT = 8000;
// middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend'))); // assuming your HTML files are in a "public" folder
// app.use(express.static("public")); 
app.use("/User", userRouter);
app.use("/loginUser",authRouter);

mongoose.connect("mongodb://localhost:27017/ai-chatbot")
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB error:", err));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});