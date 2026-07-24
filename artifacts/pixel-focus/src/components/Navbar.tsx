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

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          key="navbar"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
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
              background: "rgba(12, 12, 12, 0.82)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.07)",
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
                color: "#ffffff",
                cursor: "pointer",
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              data-testid="navbar-logo"
            >
              Pixel{" "}
              <span style={{ color: "#CDFF00" }}>Focus</span>
            </div>

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
                  onClick={() => scrollTo(link.id)}
                  data-testid={`nav-link-${link.id}`}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#888888",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "0.01em",
                    cursor: "pointer",
                    transition: "color 150ms ease",
                    padding: 0,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#888888")}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => scrollTo("platforms")}
              data-testid="navbar-cta"
              className="cta-btn"
              style={{
                background: "#CDFF00",
                color: "#0a0a0a",
                border: "none",
                borderRadius: "999px",
                padding: "9px 20px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.01em",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Get it free
            </button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
