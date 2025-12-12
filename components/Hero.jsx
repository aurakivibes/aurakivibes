// components/Hero.jsx
import Link from "next/link"

export default function Hero() {
  return (
    <header
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-sun.png')",
        backgroundSize: "70%",
        backgroundPosition: "105% 45%",   // adjust later
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f5ebd8",
        minHeight: "100vh",
      }}
    >

      {/* ================== TOP CENTER LOGO ================== */}
<div
  className="absolute top-6 w-full flex flex-col items-center justify-center z-[50]"
>
  {/* Glowing Gold Aura Logo */}
  <div
    style={{
      width: "72px",
      height: "72px",
      borderRadius: "50%",
      border: "3px solid #D4AF37",
      background: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: 700,
      fontSize: "1.8rem",
      boxShadow: "0 0 25px rgba(212,175,55,0.7), 0 0 60px rgba(212,175,55,0.4)",
      animation: "glowPulse 4s ease-in-out infinite alternate"
    }}
  >
    A
  </div>

  <h1
    className="text-center mt-3"
    style={{
      fontFamily: "Playfair Display, serif",
      fontSize: "2rem",
      fontWeight: "700",
      letterSpacing: ".6px"
    }}
  >
    Aura Ki Vibes
  </h1>
</div>


      {/* ================== MAIN HERO CONTENT ================== */}
      <section className="container flex items-center min-h-[85vh] pt-40">
        <div className="max-w-xl space-y-6">

          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "2.8rem",
              fontWeight: "700",
              lineHeight: "1.1"
            }}
          >
            Readings{" "}
            <span
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "1.4em",
                color: "#D4AF37"
              }}
            >
              Done
            </span>
            {" "}Right.
          </h2>

          <p className="text-[15px] text-gray-700 leading-relaxed max-w-md">
            Connect with trusted astrologers, receive kundli, tarot & aura guidance.
            Spiritual clarity, calmness & celestial wisdom in one place.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex gap-4 flex-wrap pt-3">
            <a href="#astrologers" className="px-6 py-3 rounded-full font-semibold text-white" style={{ background: "#000" }}>
              View Astrologers
            </a>

            <a href="#contact" className="px-6 py-3 rounded-full font-semibold"
              style={{ border: "2px solid #D4AF37", background: "#fff", color: "#222" }}>
              Contact / Verify
            </a>
          </div>

          <div className="flex gap-3 pt-4 text-sm">
            <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">IG</div>
            <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">FB</div>
            <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">TW</div>
          </div>
        </div>
      </section>



      {/* ================== GOLD AURA ANIMATION ================== */}
      <style>{`
        @keyframes glowPulse {
          0% { box-shadow: 0 0 25px rgba(212,175,55,0.4), 0 0 50px rgba(212,175,55,0.2); }
          100% { box-shadow: 0 0 35px rgba(212,175,55,0.9), 0 0 80px rgba(212,175,55,0.4); }
        }
      `}</style>

    </header>
  );
}
