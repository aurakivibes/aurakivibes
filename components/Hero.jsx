// components/Hero.jsx
import Link from "next/link"

export default function Hero() {
  return (
    <header
      className="overflow-hidden flex flex-col"
      style={{
        backgroundImage: "url('/images/hero-sun.png')",
        backgroundSize: "70%",
        backgroundPosition: "100% 5%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f5ebd8",
        minHeight: "100vh",
      }}
    >

      {/* ================== CENTER LOGO WITH GOLD AURA ================== */}
      <div className="flex flex-col items-center pt-10">

        {/* Glowing Aura Logo Mark */}
        <div
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            border: "3px solid #D4AF37",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: "1.8rem",
            boxShadow:
              "0 0 20px rgba(212,175,55,0.6), 0 0 45px rgba(212,175,55,0.3), 0 0 80px rgba(212,175,55,0.15)", // 🔥 Glow here
            animation: "glowPulse 4s infinite alternate ease-in-out", // animated aura glow
          }}
        >
          Aura
        </div>

        {/* Brand Name */}
        <h1
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "2.1rem",
            fontWeight: "700",
            letterSpacing: "0.5px",
            marginTop: "10px",
            color: "#1e1d1c",
            textAlign: "center",
          }}
        >
          Aura Ki Vibes
        </h1>
      </div>



      {/* ================== HERO LEFT SECTION ================== */}
      <section className="container flex items-center lg:min-h-[75vh] py-16">
        <div className="max-w-xl space-y-6">

          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "2.8rem",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Readings{" "}
            <span
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "1.4em",
                color: "#D4AF37",
              }}
            >
              Done
            </span>{" "}
            Right.
          </h2>

          <p className="text-[15px] text-gray-700 leading-relaxed max-w-md">
            Connect with expert astrologers, get your kundli read, receive tarot guidance
            and explore cosmic clarity through aura alignment.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex gap-4 flex-wrap pt-3">
            <a
              href="#astrologers"
              className="px-6 py-3 rounded-full font-semibold text-white"
              style={{ background: "#000" }}
            >
              View Astrologers
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full font-semibold"
              style={{
                border: "2px solid #D4AF37",
                background: "#fff",
                color: "#222",
              }}
            >
              Contact / Verify
            </a>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-3 pt-4 text-sm">
            <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">IG</div>
            <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">FB</div>
            <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">TW</div>
          </div>

          <p className="text-xs text-gray-500 pt-3">
            Confidential • WhatsApp & Call Sessions Available
          </p>
        </div>
      </section>


      {/* ================== GOLD AURA GLOW KEYFRAMES ================== */}
      <style>{`
        @keyframes glowPulse {
          0% { box-shadow: 0 0 20px rgba(212,175,55,0.4), 0 0 40px rgba(212,175,55,0.2); }
          100% { box-shadow: 0 0 25px rgba(212,175,55,0.9), 0 0 60px rgba(212,175,55,0.5); }
        }
      `}</style>

    </header>
  );
}
