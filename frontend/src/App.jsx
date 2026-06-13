import { useState } from "react";
import axios from "axios";
import GemstoneForm from "./components/GemstoneForm";
import ResultsSection from "./components/ResultsSection";
import "./index.css";

const API_URL = "http://localhost:5000/api";

function App() {
  const [view, setView] = useState("form"); // "form" | "loading" | "results"
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (formData) => {
    setView("loading");
    setError("");

    try {
      const response = await axios.post(`${API_URL}/recommend`, formData);

      if (response.data.success) {
        setResults(response.data.data);
        setView("results");
      } else {
        setError("Something went wrong. Please try again.");
        setView("form");
      }
    } catch (err) {
      console.error("API Error:", err);
      setError(
        err.response?.data?.message ||
          "Could not connect to server. Make sure the backend is running."
      );
      setView("form");
    }
  };

  const handleReset = () => {
    setView("form");
    setResults(null);
    setError("");
  };

  return (
    <div className="app-container">
      {/* Animated background orbs */}
      <div className="bg-orb bg-orb--purple"></div>
      <div className="bg-orb bg-orb--gold"></div>
      <div className="bg-orb bg-orb--emerald"></div>

      {/* Header */}
      <header className="header">
        <div className="logo">
          <span className="logo-icon">💎</span>
          GemStone Guide
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero */}
        {view === "form" && (
          <section className="hero-section">
            <h1 className="hero-title">
              Discover Your <span className="highlight">Perfect Gemstone</span>
            </h1>
            <p className="hero-subtitle">
              Based on Vedic astrology — find the gemstone that aligns with your
              zodiac, goals, and budget.
            </p>
          </section>
        )}

        {/* Error message */}
        {error && (
          <div
            style={{
              textAlign: "center",
              color: "#ff6b6b",
              marginBottom: "20px",
              padding: "12px",
              background: "rgba(255, 107, 107, 0.1)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 107, 107, 0.2)",
            }}
          >
            {error}
          </div>
        )}

        {/* Form View */}
        {view === "form" && (
          <GemstoneForm onSubmit={handleSubmit} isLoading={false} />
        )}

        {/* Loading View */}
        {view === "loading" && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">
              Consulting the stars for your perfect gemstone...
            </p>
          </div>
        )}

        {/* Results View */}
        {view === "results" && results && (
          <ResultsSection data={results} onReset={handleReset} />
        )}
      </main>
    </div>
  );
}

export default App;
