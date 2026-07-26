import { motion } from "framer-motion";
import screenDashboard from "../assets/screen-dashboard.png";
import screenTasks from "../assets/screen-tasks.png";
import screenAnalytics from "../assets/screen-analytics.png";
import screenPomodoro from "../assets/screen-pomodoro.png";
import screenMockTests from "../assets/screen-mock-tests.png";
import screenMusic from "../assets/screen-music.png";

const features = [
  {
    num: "01",
    name: "Dashboard",
    headline: "Everything at a glance. Nothing wasted.",
    body: "Study time, tasks, streaks, and today's schedule — all on one screen before you open a single textbook.",
    img: screenDashboard,
  },
  {
    num: "02",
    name: "Tasks",
    headline: "Your to-do list, without the second app.",
    body: "Filter by subject, priority, or deadline. Add tasks in seconds. Stop losing track of what actually needs to happen today.",
    img: screenTasks,
  },
  {
    num: "03",
    name: "Analytics",
    headline: "Most students study a lot. Few study smart.",
    body: "See exactly where your hours are going — by subject, by week, by session. The 28-day heatmap doesn't lie.",
    img: screenAnalytics,
  },
  {
    num: "04",
    name: "Focus Timer",
    headline: "Sprint. Recover. Repeat.",
    body: "Pomodoro with custom durations up to 90 minutes, plus a stopwatch when you just need to log raw time. Both track to the same analytics.",
    img: screenPomodoro,
  },
  {
    num: "05",
    name: "Mock Tests",
    headline: "Test yourself before the exam does.",
    body: "Log every practice test result. Track your average over time. Know which subjects need more reps before it's too late.",
    img: screenMockTests,
  },
  {
    num: "06",
    name: "Ambient Music",
    headline: "Rain, café, or white noise — your call.",
    body: "Nine built-in ambient sounds generated offline. Paste a YouTube link for anything else. No new subscriptions.",
    img: screenMusic,
  },
];

interface FeatureRowProps {
  feature: (typeof features)[0];
  index: number;
}

function FeatureRow({ feature, index }: FeatureRowProps) {
  const isEven = index % 2 === 0;

  const textBlock = (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
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
        {feature.num} — {feature.name}
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
  );

  const screenshotBlock = (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          inset: "-20px",
          background:
            "radial-gradient(ellipse at center, rgba(205,255,0,0.07) 0%, transparent 70%)",
          borderRadius: "16px",
          pointerEvents: "none",
        }}
      />
      <img
        src={feature.img}
        alt={`Pixel Focus ${feature.name}`}
        style={{
          width: "100%",
          display: "block",
          borderRadius: "10px",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
          position: "relative",
          zIndex: 1,
        }}
      />
    </motion.div>
  );

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
        {isEven ? (
          <>
            {textBlock}
            {screenshotBlock}
          </>
        ) : (
          <>
            {screenshotBlock}
            {textBlock}
          </>
        )}
      </div>
    </div>
  );
}

export default function Ecosystem() {
  return (
    <section
      id="features"
      style={{
        background: "#080808",
        paddingTop: "clamp(60px, 10vw, 120px)",
      }}
      data-testid="ecosystem-section"
    >
      {/* Header */}
      <div
        style={{
          padding: "0 clamp(24px, 6vw, 80px)",
          marginBottom: "clamp(40px, 6vw, 80px)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
            What's inside
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
            Ten tools. Already built.
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
          .feature-grid > *:first-child {
            order: 1;
          }
          .feature-grid > *:last-child {
            order: 2;
          }
        }
      `}</style>
    </section>
  );
}
