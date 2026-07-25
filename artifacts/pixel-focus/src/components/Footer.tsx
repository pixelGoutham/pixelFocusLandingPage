import { SiDiscord, SiInstagram } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    {
      icon: SiDiscord,
      label: "Discord",
      href: "https://discord.com/users/not_official_goutham",
      testId: "footer-discord",
    },
    {
      icon: SiInstagram,
      label: "Instagram",
      href: "https://instagram.com/goutham_kumar_a",
      testId: "footer-instagram",
    },
  ];

  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "28px clamp(24px, 5vw, 60px)",
      }}
      data-testid="footer"
    >
      {/* Top row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        {/* Wordmark */}
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: "14px",
            letterSpacing: "-0.02em",
            color: "#ffffff",
          }}
          data-testid="footer-wordmark"
        >
          Pixel <span style={{ color: "#CDFF00" }}>Focus</span>
        </div>

        {/* Social links */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {socials.map(({ icon: Icon, label, href, testId }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={testId}
              aria-label={label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "34px",
                height: "34px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "#555555",
                textDecoration: "none",
                transition: "color 150ms ease, border-color 150ms ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#CDFF00";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(205,255,0,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#555555";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              <Icon size={14} />
            </a>
          ))}
        </div>

        {/* Tagline */}
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#2e2e2e",
          }}
          data-testid="footer-tagline"
        >
          Focus. Study. Achieve.
        </div>
      </div>

      {/* Bottom row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "8px",
          paddingTop: "16px",
          borderTop: "1px solid rgba(255,255,255,0.03)",
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            color: "#2a2a2a",
          }}
          data-testid="footer-copyright"
        >
          &copy; {year} Pixel Focus. All rights reserved.
        </span>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "10px",
            color: "#222222",
            letterSpacing: "0.08em",
          }}
        >
          v1.0
        </span>
      </div>
    </footer>
  );
}
