// components/Hero.jsx
import Link from "next/link";

import { useState } from "react";
import FreeReadingForm from "./FreeReadingForm";

export default function Hero() {
  const [openForm, setOpenForm] = useState(false);
  return (
    <header
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-sun.png')",
        backgroundSize: "40%",
        backgroundPosition: "100% 45%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f5ebd8",
        minHeight: "100vh",
      }}
    >
      {/* FIXED TOP CENTER LOGO */}
      <div
        style={{
          position: "fixed",
          top: 18,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pointerEvents: "auto",
        }}
      >
        <div
          style={{
            width: 74,
            height: 74,
            borderRadius: "50%",
            border: "3px solid #D4AF37",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: 800,
            fontSize: "1.9rem",
            boxShadow:
              "0 0 25px rgba(212,175,55,0.7), 0 0 60px rgba(212,175,55,0.35)",
            animation: "glowPulse 4s ease-in-out infinite alternate",
          }}
          aria-hidden
        >
          A
        </div>

        <h1
          style={{
            marginTop: "10px",
            textAlign: "center",
            fontFamily: "Playfair Display, serif",
            fontSize: "1.9rem",
            fontWeight: 700,
            letterSpacing: ".4px",
            color: "#1e1d1c",
            lineHeight: 1,
          }}
        >
          Aura Ki Vibes
        </h1>
      </div>

      {/* HERO CONTENT: left column centered vertically */}
      <section
        className="container"
        style={{
          display: "flex",
          alignItems: "center", // vertical centering
          minHeight: "85vh",
          paddingTop: "120px", // keeps content below fixed logo
          paddingBottom: "40px",
        }}
      >
        <div style={{ maxWidth: 680, position: "relative" }}>
          {/* ambient glow behind heading */}
          <div
            style={{
              position: "absolute",
              left: 20,
              top: 100,
              width: 520,
              height: 220,
              background:
                "radial-gradient(ellipse at center, rgba(212,175,55,0.10) 0%, rgba(212,175,55,0.06) 20%, rgba(245,235,210,0.00) 60%)",
              filter: "blur(26px)",
              transform: "rotate(-4deg)",
              zIndex: 1,
              borderRadius: 20,
              pointerEvents: "none",
            }}
            aria-hidden
          />

          {/* particles (optional, intentionally subtle) */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: 12,
              top: 40,
              width: 360,
              height: 300,
              zIndex: 2,
              pointerEvents: "none",
            }}
            className="particles"
          >
            <span className="p p1" />
            <span className="p p2" />
            <span className="p p3" />
            <span className="p p4" />
            <span className="p p5" />
            <span className="p p6" />
          </div>

          {/* ===== Heading & copy ===== */}
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "3.1rem",
              fontWeight: 700,
              lineHeight: 1.12,
              color: "#111",
              position: "relative",
              zIndex: 5,
              margin: 0,
            }}
          >
            Your Destiny Isn’t Hidden.
            <br />
            <span
              style={{
                fontFamily: "'Great Vibes', cursive",
                color: "#D4AF37",
                fontSize: "1.28em",
                position: "relative",
                display: "inline-block",
                paddingBottom: "6px",
              }}
              className="gold-underline"
            >
              It’s Written.
            </span>
          </h2>


          <p
            style={{
              marginTop: "18px",
              fontSize: "1rem",
              maxWidth: "520px",
              lineHeight: "1.55",
              color: "#5e5a56",
              position: "relative",
              zIndex: 5,
            }}
          >
            Understand what your chart reveals about love, career, purpose and the energies
            shaping your life right now — with clarity and accuracy guided by true astrology.
          </p>


          {/* CTA AREA */}
<div style={{ marginTop: 22, position: "relative", zIndex: 5 }}>

  {/* FREE 111 READING — BUTTON (NOT <a>) */}
  <button
    onClick={() => setOpenForm(true)}
    style={{
      background: "#D4AF37",
      color: "#000",
      padding: "12px 26px",
      borderRadius: "999px",
      fontWeight: 700,
      border: "none",
      cursor: "pointer",
      marginRight: "12px",
      boxShadow: "0 4px 12px rgba(212,175,55,0.45)",
      letterSpacing: "0.3px"
    }}
  >
    Your First 111 Reading is Free
  </button>

  {/* WHATSAPP CTA */}
  <a
    href="https://wa.me/919718299989"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      background: "#D4AF37",
      color: "#000",
      padding: "12px 26px",
      borderRadius: "999px",
      fontWeight: 700,
      display: "inline-block",
      textDecoration: "none",
      boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
      letterSpacing: "0.3px"
    }}
  >
    Chat on WhatsApp
  </{/* SOCIAL ICONS — REAL SVG ICONS */}
<div
  style={{
    display: "flex",
    gap: "20px",
    marginTop: "22px",
    alignItems: "center"
  }}
>
  {/* Instagram */}
  <a href="https://instagram.com/YOUR_USERNAME" target="_blank" rel="noreferrer">
    <svg width="28" height="28" viewBox="0 0 448 512" fill="#D4AF37">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.2 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9z"/>
      <path d="M398.8 80c-8.3-35.3-35.1-62.1-70.4-70.4C296.2 0 224 0 224 0S151.8 0 119.6 9.6C84.3 17.9 57.5 44.7 49.2 80 40.9 112.3 40.9 224 40.9 224s0 111.7 8.3 144c8.3 35.3 35.1 62.1 70.4 70.4C151.8 448 224 448 224 448s72.2 0 104.4-9.6c35.3-8.3 62.1-35.1 70.4-70.4 8.3-32.3 8.3-144 8.3-144s0-111.7-8.3-144z"/>
    </svg>
  </a>

  {/* YouTube */}
  <a href="https://youtube.com/YOUR_CHANNEL" target="_blank" rel="noreferrer">
    <svg width="28" height="28" viewBox="0 0 576 512" fill="#D4AF37">
      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.5-48.6C458.4 64 288 64 288 64S117.6 64 74.8 75.5c-23.7 6.3-42.2 24.9-48.5 48.6C14.8 166.9 14.8 256 14.8 256s0 89.1 11.5 131.9c6.3 23.7 24.8 42.3 48.5 48.6C117.6 448 288 448 288 448s170.4 0 213.2-11.5c23.7-6.3 42.2-24.9 48.5-48.6 11.5-42.8 11.5-131.9 11.5-131.9s0-89.1-11.5-131.9zM232 336V176l142.9 80L232 336z"/>
    </svg>
  </a>

  {/* WhatsApp */}
  <a href="https://wa.me/919718299989" target="_blank" rel="noreferrer">
    <svg width="28" height="28" viewBox="0 0 448 512" fill="#25D366">
      <path d="M380.9 97.1C339-1.6 214.2-31.6 128.4 28.8 42.7 89.3 16.6 214.4 77 300.1L40 448l151.4-39.5c78.7 42.8 177.3 16.1 224.5-61.6 47.2-77.7 30.3-179.7-35-250.8z"/>
    </svg>
  </a>

  {/* Facebook */}
  <a href="https://facebook.com/YOUR_PAGE" target="_blank" rel="noreferrer">
    <svg width="28" height="28" viewBox="0 0 320 512" fill="#D4AF37">
      <path d="M279.14 288l14.22-92.66h-88.91V117.78c0-25.35 12.42-50.06 52.24-50.06H297V6.26S259.36 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
    </svg>
  </a>
</div>

      </section>

      {/* Inline styles and keyframes */}
      <style>{`
        @keyframes glowPulse {
          0% { box-shadow: 0 0 20px rgba(212,175,55,0.35), 0 0 40px rgba(212,175,55,0.18); transform: scale(1); }
          100% { box-shadow: 0 0 36px rgba(212,175,55,0.95), 0 0 80px rgba(212,175,55,0.35); transform: scale(1.02); }
        }

        .gold-underline::after{
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 6px;
          width: 100%;
          background: linear-gradient(90deg, rgba(212,175,55,0.95), rgba(255,240,200,0.9));
          border-radius: 6px;
          transform-origin: left center;
          transform: scaleX(0.98);
          filter: blur(0.6px);
          opacity: 0.95;
        }
        .gold-underline::before{
          content: "";
          position: absolute;
          left: -40%;
          bottom: -2px;
          width: 30%;
          height: 6px;
          background: rgba(255, 255, 255, 0.6);
          transform: skewX(-18deg);
          animation: shine 3.6s infinite linear;
          mix-blend-mode: overlay;
          border-radius: 6px;
        }
        @keyframes shine {
          0% { left: -40%; opacity: 0; }
          10% { opacity: 0.5; }
          50% { left: 120%; opacity: 0.9; }
          100% { left: 120%; opacity: 0; }
        }

        /* particle styling */
        .particles { pointer-events:none; }
        .particles .p {
          position: absolute;
          display: block;
          width: 6px;
          height: 6px;
          background: radial-gradient(circle at 30% 30%, #fff, rgba(255,255,255,0.6) 30%, rgba(212,175,55,0.9) 60%, rgba(212,175,55,0.6));
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(212,175,55,0.6), 0 0 12px rgba(255,255,255,0.12);
          opacity: 0.95;
          transform: translate3d(0,0,0);
          mix-blend-mode: screen;
        }
        .p.p1 { left: 10%; top: 20%; width:8px; height:8px; animation: float1 6.8s linear infinite; }
        .p.p2 { left: 70%; top: 40%; width:6px; height:6px; animation: float2 8.2s linear infinite; }
        .p.p3 { left: 40%; top: 70%; width:5px; height:5px; animation: float3 7.2s linear infinite; }
        .p.p4 { left: 85%; top: 10%; width:6px; height:6px; animation: float4 9.0s linear infinite; }
        .p.p5 { left: 22%; top: 55%; width:4px; height:4px; animation: float5 6.2s linear infinite; }
        .p.p6 { left: 60%; top: 18%; width:5px; height:5px; animation: float6 8.8s linear infinite; }

        @keyframes float1 {
          0% { transform: translateY(0) scale(1); opacity: 0.95 }
          50% { transform: translateY(-26px) scale(1.05); opacity: 0.8 }
          100% { transform: translateY(0) scale(1); opacity: 0.95 }
        }
        @keyframes float2 {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.95 }
          50% { transform: translateY(-36px) translateX(-12px) rotate(12deg); opacity: 0.7 }
          100% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.95 }
        }
        @keyframes float3 {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.95 }
          50% { transform: translateY(-18px) translateX(18px) scale(1.02); opacity: 0.85 }
          100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.95 }
        }
        @keyframes float4 {
          0% { transform: translateY(0) translateX(0); opacity: 0.95 }
          50% { transform: translateY(-50px) translateX(-30px) scale(0.98); opacity: 0.75 }
          100% { transform: translateY(0) translateX(0); opacity: 0.95 }
        }
        @keyframes float5 {
          0% { transform: translateY(0); opacity: 0.95 }
          50% { transform: translateY(-22px); opacity: 0.8 }
          100% { transform: translateY(0); opacity: 0.95 }
        }
        @keyframes float6 {
          0% { transform: translateY(0) translateX(0); opacity: 0.95 }
          50% { transform: translateY(-28px) translateX(12px); opacity: 0.8 }
          100% { transform: translateY(0) translateX(0); opacity: 0.95 }
        }

        /* Responsive tweaks */
        @media (max-width: 900px) {
          section.container { padding-top: 90px !important; }
        }
        @media (max-width: 640px) {
          header { background-size: contain !important; background-position: center top !important; }
          section.container { padding-top: 120px !important; }
          .particles { display: none; }
        }
      `}</style>
        {openForm && <FreeReadingForm onClose={() => setOpenForm(false)} />}
    </header>
  );
}
