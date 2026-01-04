import { useState } from "react";
import FreeReadingForm from "./FreeReadingForm";

export default function Hero() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <header
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5ebd8",
        backgroundImage: "url('/images/hero-sun.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 45%",
        backgroundSize: "40%",
        paddingTop: 120,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* LOGO */}
      <div style={logoWrap}>
        <div style={logoCircle}>A</div>
        <h1 style={logoText}>Aura Ki Vibes</h1>
      </div>

      {/* FLOATING PARTICLES */}
      <div className="hero-particles">
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* CONTENT */}
      <section style={section}>
        <div className="hero-content" style={content}>
          <h2 style={heading}>
            Your Destiny Isn’t Hidden.
            <br />
            <span className="gold-underline">It’s Written.</span>
          </h2>

          <p style={desc}>
            Understand what your chart reveals about love, career and purpose —
            guided by true astrology.
          </p>

          {/* CTA */}
          <div style={{ marginTop: 28 }}>
            <button
              onClick={() => setOpenForm(true)}
              style={primaryBtn}
            >
              Your First 111 Reading is Free
            </button>

            <a
              href="https://wa.me/919718299989"
              target="_blank"
              rel="noreferrer"
              style={secondaryBtn}
            >
              Chat on WhatsApp
            </a>

            {/* REAL SVG SOCIAL ICONS */}
            <div className="hero-socials" style={socials}>
              <SocialIcon href="https://instagram.com" path="M224.1 141c-63.6..." />
              <SocialIcon href="https://youtube.com" path="M549.7 124.1..." />
              <SocialIcon href="https://wa.me/919718299989" path="M380.9 97.1..." color="#25D366" />
              <SocialIcon href="https://facebook.com" path="M279.14 288..." />
            </div>
          </div>
        </div>
      </section>

      {openForm && <FreeReadingForm onClose={() => setOpenForm(false)} />}
    </header>
  );
}

/* SOCIAL ICON COMPONENT */
function SocialIcon({ href, path, color = "#D4AF37" }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <svg width="26" height="26" viewBox="0 0 576 512" fill={color}>
        <path d={path} />
      </svg>
    </a>
  );
}

/* STYLES */
const logoWrap = {
  position: "fixed",
  top: 18,
  left: "50%",
  transform: "translateX(-50%)",
  textAlign: "center",
  zIndex: 1000,
};

const logoCircle = {
  width: 72,
  height: 72,
  borderRadius: "50%",
  border: "3px solid #D4AF37",
  background: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 800,
  fontSize: "1.8rem",
  animation: "glowPulse 3s infinite alternate",
};

const logoText = {
  marginTop: 10,
  fontFamily: "Playfair Display, serif",
  fontSize: "1.8rem",
};

const section = {
  display: "flex",
  alignItems: "center",
  minHeight: "80vh",
  paddingLeft: 24,
};

const content = {
  maxWidth: 640,
  animation: "fadeUp 1s ease forwards",
};

const heading = {
  fontFamily: "Playfair Display, serif",
  fontSize: "3rem",
  lineHeight: 1.15,
};

const desc = {
  marginTop: 18,
  maxWidth: 520,
  color: "#5e5a56",
  lineHeight: 1.6,
};

const primaryBtn = {
  background: "#D4AF37",
  color: "#000",
  padding: "12px 26px",
  borderRadius: 999,
  fontWeight: 700,
  border: "none",
  cursor: "pointer",
  marginRight: 12,
};

const secondaryBtn = {
  background: "#D4AF37",
  color: "#000",
  padding: "12px 26px",
  borderRadius: 999,
  fontWeight: 700,
  textDecoration: "none",
};

const socials = {
  marginTop: 18,
  display: "flex",
  gap: 18,
};
