// components/Hero.jsx
import { useState } from "react";
import FreeReadingForm from "./FreeReadingForm";

export default function Hero() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <header
        style={{
          minHeight: "100vh",
          backgroundColor: "#f5ebd8",
          backgroundImage: "url('/images/hero-sun.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 45%",
          backgroundSize: "40%",
          paddingTop: 120,
        }}
      >
        {/* LOGO */}
        <div style={styles.logoWrap}>
          <div style={styles.logoCircle}>A</div>
          <h1 style={styles.logoText}>Aura Ki Vibes</h1>
        </div>

        {/* CONTENT */}
        <section style={styles.section}>
          <div style={styles.content}>
            <h2 style={styles.heading}>
              Your Destiny Isn’t Hidden.
              <br />
              <span className="gold-underline">It’s Written.</span>
            </h2>

            <p style={styles.desc}>
              Understand what your chart reveals about love, career and purpose —
              guided by true astrology.
            </p>

            {/* CTA */}
            <div style={{ marginTop: 28 }}>
              <button
                onClick={() => setOpenForm(true)}
                style={styles.primaryBtn}
              >
                Your First 111 Reading is Free
              </button>

              <a
                href="https://wa.me/919718299989"
                target="_blank"
                rel="noreferrer"
                style={styles.secondaryBtn}
              >
                Chat on WhatsApp
              </a>

              <div style={styles.socials}>
                <a href="#">Instagram</a>
                <a href="#">YouTube</a>
                <a href="#">WhatsApp</a>
                <a href="#">Facebook</a>
              </div>
            </div>
          </div>
        </section>

        {openForm && (
          <FreeReadingForm onClose={() => setOpenForm(false)} />
        )}
      </header>

      {/* SAFE INLINE CSS (NO PLACEHOLDERS) */}
      <style>{`
        .gold-underline {
          color: #D4AF37;
          font-family: 'Great Vibes', cursive;
          font-size: 1.3em;
          position: relative;
          animation: fadeUp 1.2s ease forwards;
        }

        .gold-underline::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #D4AF37, #fff1b8);
          border-radius: 4px;
          animation: shine 3s infinite linear;
        }

        @keyframes shine {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }

        @keyframes glow {
          0% { box-shadow: 0 0 15px rgba(212,175,55,0.4); }
          100% { box-shadow: 0 0 35px rgba(212,175,55,0.9); }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(212,175,55,0.6);
        }
      `}</style>
    </>
  );
}

/* INLINE STYLES OBJECT (SAFE) */
const styles = {
  logoWrap: {
    position: "fixed",
    top: 18,
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    zIndex: 1000,
  },
  logoCircle: {
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
    animation: "glow 3s ease-in-out infinite alternate",
  },
  logoText: {
    marginTop: 10,
    fontFamily: "Playfair Display, serif",
    fontSize: "1.8rem",
    fontWeight: 700,
  },
  section: {
    display: "flex",
    alignItems: "center",
    minHeight: "80vh",
    paddingLeft: 24,
  },
  content: {
    maxWidth: 640,
    animation: "fadeUp 1s ease forwards",
  },
  heading: {
    fontFamily: "Playfair Display, serif",
    fontSize: "3rem",
    lineHeight: 1.15,
  },
  desc: {
    marginTop: 18,
    maxWidth: 520,
    color: "#5e5a56",
    lineHeight: 1.6,
  },
  primaryBtn: {
    background: "#D4AF37",
    color: "#000",
    padding: "12px 26px",
    borderRadius: 999,
    fontWeight: 700,
    border: "none",
    cursor: "pointer",
    marginRight: 12,
    transition: "all 0.3s ease",
  },
  secondaryBtn: {
    background: "#D4AF37",
    color: "#000",
    padding: "12px 26px",
    borderRadius: 999,
    fontWeight: 700,
    textDecoration: "none",
    transition: "all 0.3s ease",
  },
  socials: {
    marginTop: 18,
    display: "flex",
    gap: 16,
  },
};
