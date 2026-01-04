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
<div className="hero-socials" style={{ marginTop: 18, display: "flex", gap: 18 }}>
  {/* Instagram */}
  <a href="https://instagram.com" target="_blank" rel="noreferrer">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="#D4AF37">
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10z"/>
      <circle cx="12" cy="12" r="3.2"/>
      <circle cx="17.5" cy="6.5" r="1"/>
    </svg>
  </a>

  {/* YouTube */}
  <a href="https://youtube.com" target="_blank" rel="noreferrer">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="#D4AF37">
      <path d="M21.6 7.2c-.2-1-1-1.8-2-2C17.8 5 12 5 12 5s-5.8 0-7.6.4c-1 .2-1.8 1-2 2C2 9 2 12 2 12s0 3 .4 4.8c.2 1 1 1.8 2 2 1.8.4 7.6.4 7.6.4s5.8 0 7.6-.4c1-.2 1.8-1 2-2 .4-1.8.4-4.8.4-4.8s0-3-.4-4.8z"/>
      <polygon points="10,9 16,12 10,15" fill="#000"/>
    </svg>
  </a>

  {/* WhatsApp */}
  <a href="https://wa.me/919718299989" target="_blank" rel="noreferrer">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="#25D366">
      <path d="M12 2C6.5 2 2 6.1 2 11c0 2.1.8 4.1 2.2 5.7L3 22l5.5-1.8c1.1.4 2.3.6 3.5.6 5.5 0 10-4.1 10-9S17.5 2 12 2z"/>
    </svg>
  </a>

  {/* Facebook */}
  <a href="https://facebook.com" target="_blank" rel="noreferrer">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="#D4AF37">
      <path d="M13 3h4v4h-4v3h4l-1 4h-3v7h-4v-7H7v-4h2V7c0-2.8 1.7-4 4-4z"/>
    </svg>
  </a>
</div>

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
