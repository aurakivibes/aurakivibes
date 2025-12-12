// components/Hero.jsx
import Link from "next/link";

export default function Hero() {
  return (
    <header
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-sun.png')",
        backgroundSize: "40%",
        backgroundPosition: "120% 45%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f5ebd8",
        minHeight: "100vh",
      }}
    >
      {/* ===================== FIXED TOP CENTER LOGO ===================== */}
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

      {/* ===================== HERO CONTENT ===================== */}
      <section className="container flex items-center min-h-[85vh] pt-40">
        <div className="max-w-xl relative">

          {/* ambient glow behind heading */}
          <div className="heading-glow" aria-hidden />

          {/* Animated sparkles / particles container */}
          <div className="particles" aria-hidden>
            {/* a handful of particle elements; CSS animates them */}
            <span className="p p1" />
            <span className="p p2" />
            <span className="p p3" />
            <span className="p p4" />
            <span className="p p5" />
            <span className="p p6" />
          </div>

          {/* ======== Heading: mystical & direct ======== */}
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "3.1rem",
              fontWeight: 700,
              lineHeight: 1.12,
              color: "#111",
              position: "relative",
              zIndex: 5,
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

          {/* Subline */}
          <p
            style={{
              marginTop: "18px",
              fontSize: "1rem",
              maxWidth: "440px",
              lineHeight: "1.55",
              color: "#5e5a56",
              position: "relative",
              zIndex: 5,
            }}
          >
            Understand what your chart reveals about love, career, purpose and the energies
            shaping your life right now — with clarity and accuracy guided by true astrology.
          </p>

          {/* CTA */}
          <div style={{ marginTop: 22, position: "relative", zIndex: 5 }}>
            <a
              href="#astrologers"
              style={{
                background: "#000",
                color: "#fff",
                padding: "12px 22px",
                borderRadius: 999,
                fontWeight: 700,
                textDecoration: "none",
                marginRight: 12,
                display: "inline-block",
              }}
            >
              View Astrologers
            </a>

            <a
              href="#contact"
              style={{
                padding: "11px 20px",
                borderRadius: 999,
                border: "2px solid #D4AF37",
                background: "#fff",
                color: "#222",
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Contact / Verify
            </a>
          </div>
        </div>
      </section>

      {/* ===================== INLINE STYLES & KEYFRAMES ===================== */}
      <style>{`
        /* glow for the fixed logo */
        @keyframes glowPulse {
          0% { box-shadow: 0 0 20px rgba(212,175,55,0.35), 0 0 40px rgba(212,175,55,0.18); transform: scale(1); }
          100% { box-shadow: 0 0 36px rgba(212,175,55,0.95), 0 0 80px rgba(212,175,55,0.35); transform: scale(1.02); }
        }

        /* GOLD UNDERLINE: small animated shimmer */
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

        /* subtle shimmer bar sliding (very light) */
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

        /* Heading ambient soft glow (behind) */
        .heading-glow {
          position: absolute;
          left: -40px;
          top: -30px;
          width: 520px;
          height: 220px;
          background: radial-gradient(ellipse at center, rgba(212,175,55,0.10) 0%, rgba(212,175,55,0.06) 20%, rgba(245,235,210,0.00) 60%);
          filter: blur(26px);
          transform: rotate(-4deg);
          z-index: 1;
          border-radius: 20px;
          pointer-events: none;
        }

        /* ======= particles (sparkles) ======= */
        .particles {
          position: absolute;
          left: 10px;
          top: -20px;
          width: 360px;
          height: 300px;
          pointer-events: none;
          z-index: 2;
        }
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

        /* each particle different path + speed */
        .particles .p1 { left: 10%; top: 20%; width:8px; height:8px; animation: float1 6.8s linear infinite; }
        .particles .p2 { left: 70%; top: 40%; width:6px; height:6px; animation: float2 8.2s linear infinite; }
        .particles .p3 { left: 40%; top: 70%; width:5px; height:5px; animation: float3 7.2s linear infinite; }
        .particles .p4 { left: 85%; top: 10%; width:6px; height:6px; animation: float4 9.0s linear infinite; }
        .particles .p5 { left: 22%; top: 55%; width:4px; height:4px; animation: float5 6.2s linear infinite; }
        .particles .p6 { left: 60%; top: 18%; width:5px; height:5px; animation: float6 8.8s linear infinite; }

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

        /* Responsiveness */
        @media (max-width: 900px) {
          .heading-glow { width: 420px; height: 180px; left: -20px; top: -20px; }
          .particles { width: 280px; height: 220px; left: 6px; top: -10px; }
        }
        @media (max-width: 640px) {
          header { backgroundSize: contain !important; backgroundPosition: "center top" !important; }
          .heading-glow { display: none; }
          .particles { display: none; }
        }
      `}</style>
    </header>
  );
}
