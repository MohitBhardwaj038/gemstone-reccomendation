const mongoose = require("mongoose");

const gemstoneSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    hindiName: {
      type: String,
      required: true,
    },
    planet: {
      type: String,
      required: true,
    },
    zodiacs: {
      type: [String],
      required: true,
    },
    goals: {
      type: [String],
      required: true,
    },
    priceRange: {
      min: { type: Number, required: true },
      max: { type: Number, required: true },
    },
    color: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    benefits: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gemstone", gemstoneSchema);
