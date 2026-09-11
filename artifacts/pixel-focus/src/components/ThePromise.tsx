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
        background: "var(--color-background)",
        padding: "clamp(100px, 16vw, 200px) 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        borderTop: "1px solid hsla(var(--border-h), var(--border-s), var(--border-l), 0.05)",
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
            "radial-gradient(ellipse at center, hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.06) 0%, transparent 65%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "700px" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 20, stiffness: 150 }}
        >
          {/* Italic serif line */}
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "clamp(28px, 5vw, 60px)",
              fontWeight: 700,
              color: "var(--color-muted-foreground)",
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
              color: "var(--color-foreground)",
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
              background: "var(--color-primary)",
              margin: "0 auto 40px",
            }}
          />

          {/* Download note */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              color: "var(--color-muted-foreground)",
              margin: "0 0 32px",
              letterSpacing: "0.01em",
            }}
          >
            One app. No subscriptions. No excuses.
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
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.97 }}
                data-testid={`promise-download-${label.toLowerCase()}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 22px",
                  background: "hsla(var(--border-h), var(--border-s), var(--border-l), 0.05)",
                  border: "1px solid hsla(var(--border-h), var(--border-s), var(--border-l), 0.1)",
                  borderRadius: "999px",
                  cursor: "pointer",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--color-muted-foreground)",
                  textDecoration: "none",
                }}
              >
                <Icon style={{ color: "var(--color-primary)", fontSize: "16px" }} />
                {label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}