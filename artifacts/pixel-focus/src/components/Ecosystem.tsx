import { motion } from "framer-motion";

const features = [
  {
    num: "01",
    name: "Dashboard",
    headline: "See everything. Decide faster.",
    body: "Your entire study life on one screen.",
  },
  {
    num: "02",
    name: "Tasks",
    headline: "Stop making lists. Start finishing them.",
    body: "Tasks that move with your day, not against it.",
  },
  {
    num: "03",
    name: "Analytics",
    headline: "Know how you study. Study better.",
    body: "Data on your focus, your sessions, your growth.",
  },
  {
    num: "04",
    name: "Focus Timer",
    headline: "Sprint. Recover. Repeat.",
    body: "Pomodoro and stopwatch, together, finally done right.",
  },
  {
    num: "05",
    name: "Mock Tests",
    headline: "Test yourself before the exam does.",
    body: "Practice under real pressure. Build real confidence.",
  },
  {
    num: "06",
    name: "Ambient Music",
    headline: "The right sound changes everything.",
    body: "Curated focus audio, inside the app.",
  },
];

interface FeatureRowProps {
  feature: (typeof features)[0];
  index: number;
}

function FeatureRow({ feature, index }: FeatureRowProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "clamp(48px, 8vw, 96px) clamp(24px, 6vw, 80px)",
      }}
      data-testid={`feature-row-${feature.num}`}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(32px, 5vw, 80px)",
          alignItems: "center",
        }}
        className="feature-grid"
      >
        {/* Number — always top left, content switches side */}
        {isEven ? (
          <>
            {/* Left: content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: "relative" }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#CDFF00",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                {feature.name}
              </span>
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(22px, 3.5vw, 38px)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                  color: "#ffffff",
                  margin: "0 0 16px",
                }}
              >
                {feature.headline}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(14px, 1.5vw, 17px)",
                  lineHeight: 1.7,
                  color: "#666666",
                  margin: 0,
                  maxWidth: "380px",
                }}
              >
                {feature.body}
              </p>
            </motion.div>

            {/* Right: number */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(80px, 12vw, 160px)",
                  fontWeight: 900,
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(205,255,0,0.22)",
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                  userSelect: "none",
                }}
              >
                {feature.num}
              </span>
            </motion.div>
          </>
        ) : (
          <>
            {/* Left: number */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(80px, 12vw, 160px)",
                  fontWeight: 900,
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(205,255,0,0.22)",
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                  userSelect: "none",
                }}
              >
                {feature.num}
              </span>
            </motion.div>

            {/* Right: content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#CDFF00",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                {feature.name}
              </span>
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(22px, 3.5vw, 38px)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                  color: "#ffffff",
                  margin: "0 0 16px",
                }}
              >
                {feature.headline}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(14px, 1.5vw, 17px)",
                  lineHeight: 1.7,
                  color: "#666666",
                  margin: 0,
                  maxWidth: "380px",
                }}
              >
                {feature.body}
              </p>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      style={{ background: "#080808" }}
      data-testid="ecosystem-section"
    >
      {/* Section header */}
      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "clamp(32px, 5vw, 64px) clamp(24px, 6vw, 80px)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            alignItems: "baseline",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(13px, 2vw, 15px)",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#444444",
              margin: 0,
            }}
          >
            The Ecosystem
          </h2>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "clamp(22px, 4vw, 42px)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            Six tools. One mind.
          </span>
        </motion.div>
      </div>

      {/* Feature rows */}
      {features.map((feature, i) => (
        <FeatureRow key={feature.num} feature={feature} index={i} />
      ))}

      <style>{`
        @media (max-width: 640px) {
          .feature-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
