import { motion, useReducedMotion } from "framer-motion";

export default function Problem() {
  const reducedMotion = useReducedMotion();
  return (
    <section
      id="problem"
      style={{
        background: "var(--color-background)",
        padding: "clamp(80px, 12vw, 160px) 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
      data-testid="problem-section"
    >
      <div style={{ maxWidth: "780px", width: "100%" }}>
        {/* Big statement */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: reducedMotion ? "tween" : "spring", bounce: 0, duration: reducedMotion ? 0.2 : 0.4 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(24px, 4.5vw, 52px)",
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
            color: "var(--color-foreground)",
            margin: "0 0 20px",
          }}
          data-testid="problem-statement"
        >
          You have ten tabs open.
          <br />
          <span style={{ color: "var(--color-muted-foreground)" }}>Three planners.</span>
          <br />
          <span style={{ color: "var(--color-muted-foreground)" }}>One deadline.</span>
          <br />
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: "var(--color-muted-foreground)",
              fontWeight: 700,
            }}
          >
            Zero clarity.
          </span>
        </motion.p>
      </div>
    </section>
  );
}