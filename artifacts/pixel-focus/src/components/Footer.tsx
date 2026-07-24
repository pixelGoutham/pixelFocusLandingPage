export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "28px clamp(24px, 5vw, 60px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        flexWrap: "wrap",
      }}
      data-testid="footer"
    >
      {/* Wordmark */}
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 800,
          fontSize: "14px",
          letterSpacing: "-0.02em",
          color: "#ffffff",
        }}
        data-testid="footer-wordmark"
      >
        Pixel <span style={{ color: "#CDFF00" }}>Focus</span>
      </div>

      {/* Tagline — center */}
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#444444",
        }}
        data-testid="footer-tagline"
      >
        Focus. Study. Achieve.
      </div>

      {/* Copyright */}
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "12px",
          color: "#333333",
        }}
        data-testid="footer-copyright"
      >
        &copy; {year} Pixel Focus
      </div>
    </footer>
  );
}
