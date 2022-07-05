const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const key = "rayados";

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) throw Error("Username and password are required");

    const user = await User.findOne({ email: email });

    if (!user) throw Error(`User with email ${email} not found`);

    bcrypt.compare(password, user.password, function (err, result) {
      if (err)
        res.status(400).json({
          success: false,
          message: `Something went wrong. Please try again.`,
        });
      if (!result) {
        res
          .status(400)
          .json({ success: false, message: `Password does not match` });
      }
      if (result) {
        const token = jwt.sign(
          { _id: user._id, email: user.email },
          "rayados",
          { expiresIn: "10h" }
        );

        res.status(200).json({ success: true, token: token });
      }
    });
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
  }
});

module.exports = router;
