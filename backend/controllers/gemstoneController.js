const Gemstone = require("../models/Gemstone");

// GET /api/gemstones - Get all gemstones
const getAllGemstones = async (req, res) => {
  try {
    const gemstones = await Gemstone.find({});
    res.status(200).json({
      success: true,
      count: gemstones.length,
      data: gemstones,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch gemstones",
      error: error.message,
    });
  }
};

// POST /api/recommend - Get gemstone recommendations
const getRecommendation = async (req, res) => {
  try {
    const { name, zodiac, goal, budget } = req.body;

    // Validate input
    if (!name || !zodiac || !goal || !budget) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, zodiac, goal, and budget",
      });
    }

    const budgetNum = Number(budget);

    // Fetch all gemstones from DB
    const allGemstones = await Gemstone.find({});

    // Score each gemstone based on user input
    const scored = allGemstones.map((gem) => {
      let score = 0;

      // Zodiac match (highest priority)
      if (gem.zodiacs.includes(zodiac)) {
        score += 10;
      }

      // Goal match
      const goalIndex = gem.goals.indexOf(goal);
      if (goalIndex !== -1) {
        // Higher score for goals listed earlier (primary benefits)
        score += 5 - goalIndex;
      }

      // Budget fit — reward gems that fit within budget
      if (gem.priceRange.min <= budgetNum) {
        score += 3;
      }
      if (gem.priceRange.max <= budgetNum) {
        score += 2;
      }

      return {
        gemstone: gem,
        score,
        withinBudget: gem.priceRange.min <= budgetNum,
      };
    });

    // Sort by score descending
    scored.sort((a, b) => b.score - a.score);

    // Primary Match: Best scoring gemstone within budget
    const primaryMatch = scored.find((s) => s.withinBudget);

    // Premium Pick: Best scoring gemstone with higher price range (upgrade option)
    const premiumPick = scored.find(
      (s) =>
        s.gemstone._id.toString() !==
          (primaryMatch ? primaryMatch.gemstone._id.toString() : "") &&
        s.score >= 5
    );

    // Fallback: if no good premium pick, just take the second best
    const fallbackPremium = scored.find(
      (s) =>
        s.gemstone._id.toString() !==
        (primaryMatch ? primaryMatch.gemstone._id.toString() : "")
    );

    const recommendations = {
      userName: name,
      primaryMatch: primaryMatch
        ? primaryMatch.gemstone
        : scored[0]
          ? scored[0].gemstone
          : null,
      premiumPick: premiumPick
        ? premiumPick.gemstone
        : fallbackPremium
          ? fallbackPremium.gemstone
          : null,
    };

    res.status(200).json({
      success: true,
      data: recommendations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get recommendation",
      error: error.message,
    });
  }
};

module.exports = { getAllGemstones, getRecommendation };
