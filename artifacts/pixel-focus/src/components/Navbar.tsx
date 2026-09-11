import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 60) {
        setVisible(true);
      } else if (currentY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    // Add transitioning class to trigger glass blur overlay
    document.body.classList.add('theme-transitioning');

    // Toggle dark class on html element
    document.documentElement.classList.toggle('dark');

    // Remove transitioning class after transition duration
    setTimeout(() => {
      document.body.classList.remove('theme-transitioning');
    }, 500);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          key="navbar"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: "spring", damping: 10, stiffness: 100 }} // Approximately damping 1, response 0.35
          style={{
            position: "fixed",
            top: "16px",
            left: "16px",
            right: "16px",
            zIndex: 1000,
            maxWidth: "860px",
            margin: "0 auto",
          }}
          data-testid="navbar"
        >
          <div
            style={{
              background: "hsla(var(--background-h), var(--background-s), var(--background-l), 0.82)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid hsla(var(--border-h), var(--border-s), var(--border-l), 0.07)",
              borderRadius: "999px",
              padding: "12px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: "15px",
                letterSpacing: "-0.02em",
                color: "var(--color-foreground)",
                cursor: "pointer",
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              data-testid="navbar-logo"
            >
              Pixel{" "}
              <span style={{ color: "var(--color-primary)" }}>Focus</span>
            </div>

            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              style={{
                background: "none",
                border: "none",
                color: "var(--color-muted-foreground)",
                fontSize: "20px",
                cursor: "pointer",
                padding: "4px 8px",
                borderRadius: "8px",
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "var(--color-foreground)";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "var(--color-muted-foreground)";
                e.currentTarget.style.transform = "scale(1)";
              }}
              aria-label="Toggle theme"
            >
              🌓
            </button>

            {/* Nav links — desktop only */}
            <div
              style={{
                gap: "32px",
                alignItems: "center",
              }}
              className="hidden md:flex"
            >
              {[
                { label: "Features", id: "ecosystem" },
                { label: "Platforms", id: "platforms" },
                { label: "About", id: "promise" },
              ].map((link) => (
                <button
                  key={link.id}
                  onPointerDown={(e) => {
                    e.currentTarget.style.color = "var(--color-foreground)";
                  }}
                  onPointerUp={(e) => {
                    e.currentTarget.style.color = "var(--color-muted-foreground)";
                  }}
                  onPointerCancel={(e) => {
                    e.currentTarget.style.color = "var(--color-muted-foreground)";
                  }}
                  onClick={() => scrollTo(link.id)}
                  data-testid={`nav-link-${link.id}`}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--color-muted-foreground)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "0.01em",
                    cursor: "pointer",
                    transition: "color 0.1s",
                    padding: 0,
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("platforms")}
              data-testid="navbar-cta"
              className="cta-btn"
              style={{
                background: "var(--color-primary)",
                color: "var(--color-primary-foreground)",
                border: "none",
                borderRadius: "999px",
                padding: "9px 20px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.01em",
                cursor: "pointer",
              }}
            >
              Download
            </motion.button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}