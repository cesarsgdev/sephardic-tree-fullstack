const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      maxlength: 50,
    },

    password: {
      type: String,
      required: true,
      trim: false,
      minlength: 8,
      maxlength: 50,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
