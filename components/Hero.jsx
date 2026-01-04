// components/Hero.jsx
import Link from "next/link";

export default function Hero() {
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
            {/* Your First 111 Reading is Free — primary gold button */}
            <a
              href="#aura"
              style={{
                marginRight: 12,
                background: "#D4AF37",
                color: "#000",
                padding: "12px 26px",
                borderRadius: 999,
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-block",
                boxShadow: "0 4px 12px rgba(212,175,55,0.45)",
                letterSpacing: "0.3px",
              }}
            >
             Your First 111 Reading is Free
            </a>

            {/* WhatsApp CTA — update phone number below */}
            <a
              href="https://wa.me/919718299989" /* <- REPLACE with your phone number in international format without '+' or spaces */
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#D4AF37",
                color: "#000",
                padding: "12px 26px",
                borderRadius: 999,
                fontWeight: 700,
                display: "inline-block",
                textDecoration: "none",
                boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
                letterSpacing: "0.3px",
              }}
            >
              Chat on WhatsApp
            </a>
            {/* SOCIAL ICONS — BELOW CTA BUTTONS */}
<div
  style={{
    display: "flex",
    gap: "18px",
    marginTop: "20px",
    alignItems: "center"
  }}
>
  {/* Instagram */}
  <a href="https://instagram.com/YOUR_USERNAME" target="_blank" rel="noreferrer">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="#D4AF37" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="#D4AF37" strokeWidth="2" />
      <circle cx="17" cy="7" r="1.3" fill="#D4AF37" />
    </svg>
  </a>

  {/* YouTube */}
  <a href="https://youtube.com/YOUR_CHANNEL" target="_blank" rel="noreferrer">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="4" stroke="#D4AF37" strokeWidth="2" />
      <polygon points="10,9 16,12 10,15" fill="#D4AF37" />
    </svg>
  </a>

  {/* WhatsApp */}
  <a href="https://wa.me/919718299989" target="_blank" rel="noreferrer">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C6.5 2 2 6.1 2 11c0 2.1.8 4.1 2.2 5.7L3 22l5.5-1.8c1.1.4 2.3.6 3.5.6 5.5 0 10-4.1 10-9S17.5 2 12 2z"
        stroke="#25D366"
        strokeWidth="2"
      />
    </svg>
  </a>

  {/* Facebook */}
  <a href="https://facebook.com/YOUR_PAGE" target="_blank" rel="noreferrer">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="2" />
      <path
        d="M13 8h2V5h-2c-2.2 0-4 1.8-4 4v2H7v3h2v6h3v-6h2l1-3h-3V9c0-.6.4-1 1-1z"
        fill="#D4AF37"
      />
    </svg>
  </a>
</div>

          </div>
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
    </header>
  );
}
{/* SOCIAL ICONS – TEST VERSION (BLACK, EASY TO SEE) */}
<div style={{ display: "flex", gap: "18px", marginTop: "22px" }}>
  {/* Instagram */}
  <a href="#" style={{ color: "#000", fontSize: "18px", fontWeight: "bold" }}>
    IG
  </a>

  {/* YouTube */}
  <a href="#" style={{ color: "#000", fontSize: "18px", fontWeight: "bold" }}>
    YT
  </a>

  {/* WhatsApp */}
  <a href="#" style={{ color: "#000", fontSize: "18px", fontWeight: "bold" }}>
    WA
  </a>

  {/* Facebook */}
  <a href="#" style={{ color: "#000", fontSize: "18px", fontWeight: "bold" }}>
    FB
  </a>
</div>
