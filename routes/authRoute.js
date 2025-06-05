const express = require("express");
const app = express();
const authRouter = express.Router();
const loginUser = require("../model/loginUser");
const User = require("../model/user");
const bcrypt = require('bcrypt');
// const { use } = require("react");
authRouter.post("/login", async (req, res) => {
    console.log("Incoming login data:", req.body); // <--- LOG
  const { userName, Password } = req.body;
  console.log("Login attempt for:", userName);
  try {
    const user = await User.findOne({username: userName});
        console.log("User found in DB:", user); // <--- LOG

    if (!user) {
      console.log("Invalid username");
      return res.status(400).json({ message: "Invalid username !!" });
    }
    // const isMatch = await bcrypt.compare(Password, user.Password);
    // if (!isMatch) {
    //   console.log("Invalid password");
    //   return res.status(400).json({ message: "Invalid password!!" });
    // }
    if (user.password !== Password) {
      return res.status(400).json({ message: 'Invalid password' });
  }
    console.log("Login successful");
    res.status(200).json({ message: "Login successful", userId: user._id });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = authRouter;