import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section
      id="problem"
      style={{
        background: "#080808",
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
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(24px, 4.5vw, 52px)",
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            margin: "0 0 20px",
          }}
          data-testid="problem-statement"
        >
          You have ten tabs open.
          <br />
          <span style={{ color: "#555555" }}>Three planners.</span>
          <br />
          <span style={{ color: "#333333" }}>One deadline.</span>
          <br />
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: "#222222",
              fontWeight: 700,
            }}
          >
            Zero clarity.
          </span>
        </motion.p>

        {/* Separator line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          style={{
            width: "clamp(60px, 15vw, 120px)",
            height: "1px",
            background: "#CDFF00",
            margin: "44px auto",
            transformOrigin: "left center",
          }}
        />

        {/* Resolution */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(18px, 3vw, 32px)",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            margin: 0,
          }}
          data-testid="problem-resolution"
        >
          There is a better way.
        </motion.p>
      </div>
    </section>
  );
}
