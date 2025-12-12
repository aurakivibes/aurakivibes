// components/Hero.jsx
import Link from "next/link";

export default function Hero() {
  return (
    <header
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-sun.png')",
        backgroundSize: "40%",
        backgroundPosition: "120% 25%",
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

      {/* HERO: vertically centered left column */}
      <section
        className="container"
        style={{
          display: "flex",
          alignItems: "center",      // <-- vertical centering
          minHeight: "85vh",
          paddingTop: "120px",       // safe space so content sits below fixed logo
          paddingBottom: "40px",
        }}
      >
        <div style={{ maxWidth: 680 }}>
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

          {/* particles (kept simple) */}
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
              display: "none", /* hide by default for CSS-controlled playback below */
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

          {/* ===== Heading & copy (centered vertically) ===== */}
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

      {/* Inline styles for animation + responsive tweaks */}
      <style>{`
        @keyframes glowPulse {
          0% { box-shadow: 0 0 20px rgba(212,175,55,0.35), 0 0 40px rgba(212,175,55,0.18); transform: scale(1); }
          100% { box-shadow: 0 0 36px rgba(212,175,55,0.95), 0 0 80px rgba(212,175,55,0.35); transform: scale(1.02); }
        }

        /* gold underline */
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

        /* small responsive rules */
        @media (max-width: 900px) {
          section.container { padding-top: 90px !important; }
        }

        @media (max-width: 640px) {
          header { background-size: contain !important; background-position: center top !important; }
          section.container { padding-top: 120px !important; }
        }
      `}</style>
    </header>
  );
}
