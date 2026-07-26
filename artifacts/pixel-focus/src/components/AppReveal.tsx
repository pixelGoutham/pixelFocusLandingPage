import { motion } from "framer-motion";
import dashboardScreenshot from "../assets/screen-dashboard.png";

export default function AppReveal() {
  return (
    <section
      id="app-reveal"
      style={{
        background: "#080808",
        padding: "clamp(40px, 8vw, 100px) 24px clamp(80px, 12vw, 140px)",
        overflow: "hidden",
      }}
      data-testid="app-reveal-section"
    >
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center", marginBottom: "48px" }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#CDFF00",
          }}
        >
          The command center
        </span>
      </motion.div>

      {/* Screenshot container */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        {/* Glow behind */}
        <div
          style={{
            position: "absolute",
            inset: "-40px",
            background:
              "radial-gradient(ellipse at center, rgba(205,255,0,0.1) 0%, transparent 65%)",
            borderRadius: "24px",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Screenshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "relative",
            zIndex: 1,
            transform: "perspective(1200px) rotateX(4deg)",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(205,255,0,0.06)",
          }}
          data-testid="app-screenshot"
        >
          <img
            src={dashboardScreenshot}
            alt="Pixel Focus dashboard"
            style={{
              width: "100%",
              display: "block",
            }}
          />

          {/* Bottom fade */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(8,8,8,0) 70%, rgba(8,8,8,0.5) 100%)",
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
