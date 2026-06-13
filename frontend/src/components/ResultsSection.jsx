import GemstoneCard from "./GemstoneCard";

function ResultsSection({ data, onReset }) {
  const { userName, primaryMatch, premiumPick } = data;

  return (
    <div className="results-section" id="results-section">
      <div className="results-greeting">
        <h2>
          Hi <span className="user-name">{userName}</span>, here are your
          recommendations!
        </h2>
        <p>Based on your zodiac, goals, and budget — these gems are perfect for you.</p>
      </div>

      <div className="results-grid">
        {primaryMatch && (
          <GemstoneCard gemstone={primaryMatch} type="primary" />
        )}
        {premiumPick && (
          <GemstoneCard gemstone={premiumPick} type="premium" />
        )}
      </div>

      <button className="btn-back" onClick={onReset} id="try-again-btn">
        ← Try Again
      </button>
    </div>
  );
}

export default ResultsSection;
