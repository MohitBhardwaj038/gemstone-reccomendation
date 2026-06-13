const express = require("express");
const router = express.Router();
const {
  getAllGemstones,
  getRecommendation,
} = require("../controllers/gemstoneController");

// GET /api/gemstones - Get all gemstones
router.get("/gemstones", getAllGemstones);

// POST /api/recommend - Get recommendations based on user input
router.post("/recommend", getRecommendation);

module.exports = router;
