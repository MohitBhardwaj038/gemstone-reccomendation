import { useState } from "react";

const ZODIACS = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

const GOALS = [
  { value: "wealth", label: "💰 Wealth & Prosperity" },
  { value: "health", label: "🏥 Health & Vitality" },
  { value: "love", label: "❤️ Love & Relationships" },
  { value: "career", label: "🚀 Career & Success" },
  { value: "protection", label: "🛡️ Protection & Safety" },
  { value: "wisdom", label: "📚 Wisdom & Knowledge" },
];

function GemstoneForm({ onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    name: "",
    zodiac: "",
    goal: "",
    budget: 20000,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSlider = (e) => {
    setFormData((prev) => ({ ...prev, budget: Number(e.target.value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.zodiac || !formData.goal) return;
    onSubmit(formData);
  };

  const formatBudget = (val) => {
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(1)} Lakh`;
    }
    return `₹${val.toLocaleString("en-IN")}`;
  };

  return (
    <form className="form-card" onSubmit={handleSubmit} id="gemstone-form">
      <h2 className="form-card__title">
        Tell us about <span>yourself</span>
      </h2>

      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="zodiac">Zodiac Sign</label>
        <select
          id="zodiac"
          name="zodiac"
          value={formData.zodiac}
          onChange={handleChange}
          required
        >
          <option value="">Select your zodiac sign</option>
          {ZODIACS.map((z) => (
            <option key={z} value={z}>
              {z}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="goal">Your Goal</label>
        <select
          id="goal"
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          required
        >
          <option value="">What do you seek?</option>
          {GOALS.map((g) => (
            <option key={g.value} value={g.value}>
              {g.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Budget</label>
        <div className="budget-slider-container">
          <div className="budget-display">{formatBudget(formData.budget)}</div>
          <input
            type="range"
            className="budget-slider"
            min="1000"
            max="500000"
            step="1000"
            value={formData.budget}
            onChange={handleSlider}
            id="budget-slider"
          />
          <div className="budget-range-labels">
            <span>₹1,000</span>
            <span>₹5,00,000</span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="btn-submit"
        disabled={isLoading}
        id="submit-btn"
      >
        {isLoading ? "Finding your gemstone..." : "✨ Find My Gemstone"}
      </button>
    </form>
  );
}

export default GemstoneForm;
