import { motion } from "framer-motion";

export default function Donate() {
  return (
    <section
      id="donate"
      style={{
        background: "#080808",
        padding: "clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
      data-testid="donate-section"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ maxWidth: "560px", width: "100%" }}
      >
        {/* Label */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#CDFF00",
            marginBottom: "20px",
          }}
        >
          Support the mission
        </p>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(22px, 4vw, 36px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            lineHeight: 1.15,
            marginBottom: "16px",
          }}
        >
          Built by a student.{" "}
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 700,
              color: "#888888",
            }}
          >
            For every student.
          </span>
        </h2>

        {/* Body */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(14px, 1.8vw, 16px)",
            fontWeight: 400,
            lineHeight: 1.7,
            color: "#555555",
            marginBottom: "40px",
          }}
        >
          Pixel Focus is a passion project — no VC funding, no corporate team.
          Just one person who wanted better tools for students and decided to
          build them. If it's made your study life even a little better, consider
          buying me a chai.
        </p>

        {/* Donate button */}
        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="donate-btn"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "14px 32px",
            background: "transparent",
            border: "1px solid rgba(205,255,0,0.35)",
            borderRadius: "999px",
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            fontWeight: 700,
            color: "#CDFF00",
            letterSpacing: "0.01em",
            textDecoration: "none",
            cursor: "pointer",
            transition: "border-color 200ms ease, box-shadow 200ms ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(205,255,0,0.7)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 24px rgba(205,255,0,0.1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(205,255,0,0.35)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
          }}
        >
          {/* Razorpay-style heart icon */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ flexShrink: 0 }}
          >
            <path d="M12 21.593c-.425-.052-8.77-5.528-8.77-11.27C3.23 6.081 6.191 4 9.048 4c1.783 0 3.407.97 4.26 2.5L12 7.952l-.308-.452C10.84 5.97 9.216 4 7.432 4 4.576 4 1.615 6.08 1.615 10.323c0 5.742 8.345 11.218 8.77 11.27h.001zm1.308-2.143c-.425.052-8.77-5.528-8.77-11.27 0-4.242 2.96-6.323 5.818-6.323 1.783 0 3.407.97 4.26 2.5l.692 1.452.692-1.452C16.853 5.97 18.477 4 20.261 4c2.857 0 5.818 2.08 5.818 6.323 0 5.742-8.345 11.218-8.77 11.27h-.001z" />
          </svg>
          Donate via Razorpay
        </motion.a>

        {/* Fine print */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            color: "#2e2e2e",
            marginTop: "20px",
            letterSpacing: "0.02em",
          }}
        >
          Every rupee goes back into making Pixel Focus better.
        </p>
      </motion.div>
    </section>
  );
}
