import { motion } from "framer-motion";
import { FaWindows } from "react-icons/fa";
import { SiLinux, SiAndroid } from "react-icons/si";

const words = ["Stop", "juggling.", "Start"];
const italicWord = "owning";
const restWords = ["your", "study", "life."];

function HeroH1() {
  const allWords = [
    ...words.map((w) => ({ text: w, italic: false })),
    { text: italicWord, italic: true },
    ...restWords.map((w) => ({ text: w, italic: false })),
  ];

  return (
    <h1
      style={{
        fontSize: "clamp(42px, 7vw, 96px)",
        lineHeight: 1.08,
        letterSpacing: "-0.035em",
        fontWeight: 900,
        fontFamily: "'Inter', sans-serif",
        color: "#ffffff",
        margin: "0 0 24px",
        maxWidth: "860px",
        textAlign: "center",
      }}
    >
      {allWords.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.45,
            delay: 0.1 + i * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            display: "inline-block",
            marginRight: "0.28em",
            fontFamily: word.italic
              ? "'Playfair Display', serif"
              : "'Inter', sans-serif",
            fontStyle: word.italic ? "italic" : "normal",
            fontWeight: word.italic ? 700 : 900,
            color: word.italic ? "#CDFF00" : "#ffffff",
          }}
        >
          {word.text}
        </motion.span>
      ))}
    </h1>
  );
}

const platforms = [
  { icon: FaWindows, label: "Windows", href: "https://drive.google.com/file/d/1CaZsuIty3CU9Jj3P-WIb13qnnBo8kPic/view?usp=sharing" },
  { icon: SiLinux, label: "Linux", href: "https://drive.google.com/file/d/1YqD2qvedqHKM1Pvc99YBOGOEWjblrfoj/view?usp=drive_link" },
  { icon: SiAndroid, label: "Android", href: "https://drive.google.com/file/d/1lKYQ9wCUWeA6jMYMALaaqYw-tXGF9xEQ/view?usp=sharing" },
];

export default function Hero() {
  const scrollToPlatforms = () => {
    const el = document.getElementById("platforms");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        overflow: "hidden",
        padding: "clamp(120px, 18vh, 200px) 24px 80px",
        background: "#080808",
      }}
      data-testid="hero-section"
    >
      {/* Yellow glow orb */}
      <div
        className="glow-orb"
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(700px, 90vw)",
          height: "min(500px, 70vw)",
          background:
            "radial-gradient(ellipse at center, rgba(205,255,0,0.28) 0%, rgba(205,255,0,0.06) 45%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#CDFF00",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#CDFF00",
            }}
            data-testid="hero-label"
          >
            For students. Only students.
          </span>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#CDFF00",
              display: "inline-block",
            }}
          />
        </motion.div>

        {/* H1 */}
        <HeroH1 />

        {/* Sub line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(14px, 1.8vw, 17px)",
            fontWeight: 400,
            lineHeight: 1.65,
            color: "#888888",
            maxWidth: "460px",
            margin: "0 0 28px",
          }}
          data-testid="hero-subline"
        >
          Ten tools. One place. One less reason to quit.
        </motion.p>

        {/* Platform pills */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.48 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          {platforms.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="platform-pill"
              data-testid={`hero-platform-${label.toLowerCase()}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "9px 18px",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "999px",
                cursor: "pointer",
                background: "rgba(255,255,255,0.03)",
                textDecoration: "none",
              }}
            >
              <Icon
                style={{
                  color: "#CDFF00",
                  fontSize: "15px",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#cccccc",
                }}
              >
                {label}
              </span>
            </a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.56 }}
          onClick={scrollToPlatforms}
          className="cta-btn"
          data-testid="hero-cta"
          style={{
            background: "#CDFF00",
            color: "#080808",
            border: "none",
            borderRadius: "999px",
            padding: "14px 38px",
            fontFamily: "'Inter', sans-serif",
            fontSize: "15px",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            cursor: "pointer",
          }}
        >
          Download
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, #CDFF00, transparent)",
            opacity: 0.5,
          }}
        />
      </motion.div>
    </section>
  );
}
