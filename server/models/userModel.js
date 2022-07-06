const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

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
      unique: true,
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

    roles: [{ type: String }],
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) throw err;
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) throw err;
      else {
        user.password = hash;
        next();
      }
    });
  });
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
