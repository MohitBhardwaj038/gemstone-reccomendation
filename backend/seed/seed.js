const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Gemstone = require("../models/Gemstone");
const gemstones = require("./seedData");

dotenv.config({ path: path.join(__dirname, "..", ".env") });

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    // Clear existing data
    await Gemstone.deleteMany({});
    console.log("🗑️  Cleared existing gemstones");

    // Insert seed data
    const inserted = await Gemstone.insertMany(gemstones);
    console.log(`💎 Seeded ${inserted.length} gemstones successfully!`);

    inserted.forEach((gem) => {
      console.log(`   - ${gem.name} (${gem.hindiName})`);
    });

    await mongoose.connection.close();
    console.log("\n✅ Database connection closed. Seeding complete!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    process.exit(1);
  }
};

seedDB();
