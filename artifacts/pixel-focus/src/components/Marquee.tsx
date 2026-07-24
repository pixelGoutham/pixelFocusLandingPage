export default function Marquee() {
  const items = [
    "Focus.",
    "·",
    "Study.",
    "·",
    "Achieve.",
    "·",
    "Focus.",
    "·",
    "Study.",
    "·",
    "Achieve.",
    "·",
    "Focus.",
    "·",
    "Study.",
    "·",
    "Achieve.",
    "·",
    "Focus.",
    "·",
    "Study.",
    "·",
    "Achieve.",
    "·",
  ];

  return (
    <div
      style={{
        background: "#111111",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
        padding: "20px 0",
      }}
      data-testid="marquee-strip"
    >
      <div className="marquee-container">
        <div className="marquee-track">
          {/* Double the items for seamless loop */}
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily:
                  item === "·"
                    ? "'Inter', sans-serif"
                    : "'Inter', sans-serif",
                fontSize: item === "·" ? "18px" : "13px",
                fontWeight: item === "·" ? 300 : 700,
                letterSpacing: item === "·" ? "0.05em" : "0.18em",
                textTransform: "uppercase",
                color: item === "·" ? "rgba(205,255,0,0.3)" : "#CDFF00",
                padding: item === "·" ? "0 28px" : "0 6px",
                lineHeight: 1,
                flexShrink: 0,
                display: "inline-block",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
