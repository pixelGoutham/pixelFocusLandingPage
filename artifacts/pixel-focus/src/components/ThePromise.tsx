import { motion } from "framer-motion";
import { FaWindows } from "react-icons/fa";
import { SiLinux, SiAndroid } from "react-icons/si";

const platforms = [
  { icon: FaWindows, label: "Windows", href: "https://drive.google.com/file/d/1CaZsuIty3CU9Jj3P-WIb13qnnBo8kPic/view?usp=sharing" },
  { icon: SiLinux, label: "Linux", href: "https://drive.google.com/file/d/1YqD2qvedqHKM1Pvc99YBOGOEWjblrfoj/view?usp=drive_link" },
  { icon: SiAndroid, label: "Android", href: "https://drive.google.com/file/d/1lKYQ9wCUWeA6jMYMALaaqYw-tXGF9xEQ/view?usp=sharing" },
];

export default function ThePromise() {
  return (
    <section
      id="promise"
      style={{
        background: "#080808",
        padding: "clamp(100px, 16vw, 200px) 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        position: "relative",
        overflow: "hidden",
      }}
      data-testid="promise-section"
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(ellipse at center, rgba(205,255,0,0.06) 0%, transparent 65%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "700px" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Italic serif line */}
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "clamp(28px, 5vw, 60px)",
              fontWeight: 700,
              color: "#666666",
              margin: "0 0 4px",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Built for students
          </p>

          {/* Bold block line */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(32px, 6vw, 72px)",
              fontWeight: 900,
              color: "#ffffff",
              margin: "0 0 48px",
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
            }}
            data-testid="promise-headline"
          >
            WHO ACTUALLY CARE.
          </p>

          {/* Yellow line */}
          <div
            style={{
              width: "200px",
              height: "1px",
              background: "#CDFF00",
              margin: "0 auto 40px",
            }}
          />

          {/* Download note */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              color: "#555555",
              margin: "0 0 32px",
              letterSpacing: "0.01em",
            }}
          >
            The command center you've been waiting for.
          </p>

          {/* Platform download buttons */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {platforms.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
                data-testid={`promise-download-${label.toLowerCase()}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 22px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "999px",
                  cursor: "pointer",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#cccccc",
                  textDecoration: "none",
                }}
              >
                <Icon style={{ color: "#CDFF00", fontSize: "16px" }} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
