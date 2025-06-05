const express = require("express");
const app = express();
const router = express.Router();
const User = require("../model/user");
router.post("/signUp",async (req,res) => {
    const {username , email , password} = req.body;
    if(!username || !email || !password) {
        return res.status(400).json({msg:"All fields are required"});
    }
    // await User.create({
    //     username, //label name attribute..
    //     email,
    //     password,
    // });
    try {
        await User.create({ username, email, password });
        res.status(201).json({ msg: "User created successfully!" });
    } catch (error) {
        res.status(500).json({ msg: "Server error", error });
    }
})
// .patch(async (req,res) => {
//     await user.findByIdAndUpdate(req.params.id,{password:"changed password"}) //get from frontend
// });
module.exports = router; // ✅ Must export router
