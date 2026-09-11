import { motion } from "framer-motion";
import { FaWindows } from "react-icons/fa";
import { SiLinux, SiAndroid } from "react-icons/si";

const platforms = [
  {
    icon: FaWindows,
    name: "Windows",
    desc: "Windows 10 and above",
    href: "https://drive.google.com/file/d/1CaZsuIty3CU9Jj3P-WIb13qnnBo8kPic/view?usp=sharing",
  },
  {
    icon: SiLinux,
    name: "Linux",
    desc: "Debian / Ubuntu / Arch",
    href: "https://drive.google.com/file/d/1YqD2qvedqHKM1Pvc99YBOGOEWjblrfoj/view?usp=drive_link",
  },
  {
    icon: SiAndroid,
    name: "Android",
    desc: "Android 8.0 and above",
    href: "https://drive.google.com/file/d/1lKYQ9wCUWeA6jMYMALaaqYw-tXGF9xEQ/view?usp=sharing",
  },
];

export default function Platforms() {
  return (
    <section
      id="platforms"
      style={{
        background: "var(--color-background)",
        padding: "clamp(80px, 12vw, 140px) 24px",
        borderTop: "1px solid hsla(var(--border-h), var(--border-s), var(--border-l), 0.05)",
      }}
      data-testid="platforms-section"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        style={{ textAlign: "center", marginBottom: "64px" }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-primary)",
            display: "block",
            marginBottom: "16px",
          }}
        >
          Available now
        </span>
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            color: "var(--color-foreground)",
            margin: 0,
          }}
        >
          Wherever you study.
        </h2>
      </motion.div>

      {/* Cards */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
        }}
      >
        {platforms.map(({ icon: Icon, name, desc, href }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, borderColor: "hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.2)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            data-testid={`platform-card-${name.toLowerCase()}`}
            style={{
              background: "var(--color-card)",
              border: "1px solid hsla(var(--border-h), var(--border-s), var(--border-l), 0.07)",
              borderRadius: "20px",
              padding: "40px 32px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              cursor: "default",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                background: "hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.08)",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon style={{ color: "var(--color-primary)", fontSize: "26px" }} />
            </div>

            <div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "19px",
                  fontWeight: 700,
                  color: "var(--color-foreground)",
                  letterSpacing: "-0.02em",
                  marginBottom: "6px",
                }}
              >
                {name}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  color: "var(--color-muted-foreground)",
                  lineHeight: 1.5,
                }}
              >
                {desc}
              </div>
            </div>

            <motion.a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              data-testid={`download-btn-${name.toLowerCase()}`}
              style={{
                display: "inline-block",
                background: "var(--color-primary)",
                color: "var(--color-primary-foreground)",
                border: "none",
                borderRadius: "999px",
                padding: "12px 24px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
                alignSelf: "flex-start",
                letterSpacing: "0.01em",
                textDecoration: "none",
              }}
            >
              Download
            </motion.a>
          </motion.div>
        ))}
      </div>

      {/* Coming soon note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ type: "spring", bounce: 0, duration: 0.4, delay: 0.4 }}
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "13px",
          color: "var(--color-muted-foreground)",
          letterSpacing: "0.01em",
        }}
        data-testid="coming-soon-text"
      >
        macOS and iOS — coming soon.
      </motion.p>
    </section>
  );
}