const mongoose = require("mongoose");
const { Schema } = mongoose;
const generationsNames = require("../data/generationsNames");

const personSchema = new Schema(
  {
    name: { type: String, trim: true, default: "Rolando Gonzalez" },
    events: {
      code: {
        type: String,
        trim: true,
        default: "n.",
      },
      data: {
        date: {
          day: { type: Number, default: 17 },
          month: {
            type: Number,
            default: 08,
          },
          year: {
            type: Number,
            default: 1933,
          },
        },
        place: {
          type: String,
          trim: true,
          default: "Pesqueria, Nuevo Leon",
        },
      },
      death: {
        date: {
          day: { type: Number, default: 08 },
          month: {
            type: Number,
            default: 02,
          },
          year: {
            type: Number,
            default: 2004,
          },
        },
        place: {
          type: String,
          trim: true,
          default: "Monterrey, Nuevo Leon",
        },
      },
    },
  },
  { _id: false }
);

const marriageSchema = new Schema(
  {
    place: { type: String, trim: true, default: "Monterrey, Nuevo Leon" },
    date: {
      day: { type: Number, default: 30 },
      month: { type: Number, default: 03 },
      yearh: { type: Number, default: 1950 },
    },
  },
  { _id: false }
);

const generationSchema = new Schema(
  {
    level: { type: String, default: null },
    principal: { type: personSchema, default: () => ({}) },
    marriage: { type: marriageSchema, default: () => ({}) },
    partner: { type: personSchema, default: () => ({}) },
  },
  { timestamps: true }
);

generationSchema.post("find", async function (doc) {
  //   for (let i = 0; i <= doc.length; i++) {
  //     doc[i]._doc[i].level = generationsNames[i];
  //   }

  for (let [index, generation] of doc.entries()) {
    generation._doc.level = generationsNames[index];
  }
});

const generationsModel = mongoose.model("generations", generationSchema);

module.exports = generationsModel;
