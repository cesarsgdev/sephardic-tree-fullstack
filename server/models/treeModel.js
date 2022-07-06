const mongoose = require("mongoose");
const { Schema } = mongoose;
const lastNames = require("../data/lastNames");

const treeSchema = new Schema(
  {
    uid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
      trim: true,
    },
    name: {
      type: String,
      default: () => {
        const random = Math.ceil(Math.random() * 33);
        return `${lastNames[random]} Family`;
      },
      trim: true,
    },

    generations: [{ type: mongoose.Schema.Types.ObjectId, ref: "generations" }],
  },

  { timestamps: true }
);

const treeModel = mongoose.model("trees", treeSchema);

module.exports = treeModel;
