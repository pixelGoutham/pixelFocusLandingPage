import { motion } from "framer-motion";

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

        {/* Placeholder frame */}
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
            aspectRatio: "16/9",
            background: "#0D0D0D",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
          data-testid="app-screenshot-placeholder"
        >
          {/* Fake window chrome */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "36px",
              background: "#111111",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              alignItems: "center",
              padding: "0 16px",
              gap: "8px",
            }}
          >
            {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
              <div
                key={c}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: c,
                  opacity: 0.5,
                }}
              />
            ))}
          </div>

          {/* Fake sidebar */}
          <div
            style={{
              position: "absolute",
              top: "36px",
              left: 0,
              bottom: 0,
              width: "clamp(48px, 8%, 80px)",
              background: "#0A0A0A",
              borderRight: "1px solid rgba(255,255,255,0.04)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "20px",
              gap: "16px",
            }}
          >
            {[40, 28, 28, 28, 28, 28].map((opacity, i) => (
              <div
                key={i}
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "5px",
                  background: i === 0 ? "#CDFF00" : `rgba(255,255,255,0.${opacity > 28 ? "08" : "04"})`,
                  opacity: i === 0 ? 1 : 0.4,
                }}
              />
            ))}
          </div>

          {/* Centre content area */}
          <div style={{ textAlign: "center" }}>
            <motion.div
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(11px, 1.5vw, 14px)",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#CDFF00",
                marginBottom: "10px",
              }}
            >
              Screenshot coming soon
            </motion.div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(11px, 1.2vw, 13px)",
                color: "#333333",
                letterSpacing: "0.02em",
              }}
            >
              Pixel Focus — Dashboard
            </p>
          </div>

          {/* Bottom gradient */}
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
