// Map gemstone names to their local image paths
const IMAGE_MAP = {
  Ruby: "/gemstones/ruby.png",
  Pearl: "/gemstones/pearl.png",
  "Red Coral": "/gemstones/red_coral.png",
  Emerald: "/gemstones/emerald.png",
  "Yellow Sapphire": "/gemstones/yellow_sapphire.png",
  Diamond: "/gemstones/diamond.png",
  "Blue Sapphire": null,
  Hessonite: null,
  "Cat's Eye": null,
};

function GemstoneCard({ gemstone, type }) {
  const isPrimary = type === "primary";
  const imageUrl = IMAGE_MAP[gemstone.name];

  const formatPrice = (val) => {
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(1)}L`;
    }
    return `₹${val.toLocaleString("en-IN")}`;
  };

  return (
    <div
      className={`gemstone-card ${isPrimary ? "gemstone-card--primary" : "gemstone-card--premium"}`}
      id={`gemstone-card-${type}`}
    >
      <div
        className={`card-badge ${isPrimary ? "card-badge--primary" : "card-badge--premium"}`}
      >
        {isPrimary ? "✨ Best Match" : "💎 Premium Pick"}
      </div>

      <div className="card-image-container">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={gemstone.name}
            className="card-image"
            loading="lazy"
          />
        ) : (
          <div
            className="card-image-fallback"
            style={{
              background: `radial-gradient(circle, ${gemstone.color}66, ${gemstone.color}22)`,
              color: gemstone.color,
            }}
          >
            💎
          </div>
        )}
      </div>

      <div className="card-body">
        <h3 className="card-name">{gemstone.name}</h3>
        <p className="card-hindi-name">
          {gemstone.hindiName} • {gemstone.planet}
        </p>

        <div className="card-meta">
          <span className="meta-tag" style={{ color: gemstone.color }}>
            ● {gemstone.color}
          </span>
          {gemstone.zodiacs.map((z) => (
            <span className="meta-tag" key={z}>
              ♈ {z}
            </span>
          ))}
        </div>

        <p className="card-description">{gemstone.description}</p>

        <p className="card-benefits-title">Key Benefits</p>
        <p className="card-benefits">{gemstone.benefits}</p>

        <div className="card-price">
          <span className="price-label">Price Range</span>
          <span className="price-value">
            {formatPrice(gemstone.priceRange.min)} –{" "}
            {formatPrice(gemstone.priceRange.max)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default GemstoneCard;
