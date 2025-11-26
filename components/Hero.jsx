// components/Hero.jsx
import Link from "next/link"

export default function Hero() {
  return (
    <header
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-sun.png')",   // your file
        backgroundSize: "70%",                            // << 40% SIZE APPLIED
        backgroundPosition: "right upper",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f5ebd8",
        minHeight: "100vh",                               // full hero height
        display: "flex",
        flexDirection: "column",
      }}
    >

      {/* =========== TOP NAV =========== */}
      <nav className="container py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center font-bold text-lg">A</div>
          <span className="font-medium text-base">Aura Ki Vibes</span>
        </div>

        <div className="hidden md:flex gap-6 text-sm">
          <Link href="#about"><span className="cursor-pointer text-gray-600">About</span></Link>
          <Link href="#blog"><span className="cursor-pointer text-gray-600">Blog</span></Link>
          <Link href="#astrologers"><span className="cursor-pointer text-gray-600">Astrologers</span></Link>
          <Link href="#contact"><span className="cursor-pointer text-gray-600">Contact</span></Link>

          <button
            className="ml-2 px-5 py-2 rounded-full font-semibold"
            style={{ border: "2px solid #D4AF37", background: "#fff" }}
          >
            Login / Register
          </button>
        </div>
      </nav>



      {/* =========== HERO LEFT SECTION =========== */}
      <section className="container flex items-center lg:min-height-[80vh] py-16">
        <div className="max-w-xl space-y-6">

          {/* TITLE */}
          <h1 style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "3rem",
            fontWeight: 700,
            lineHeight: "1.1"
          }}>
            Aura Ki Vibes <br/>
            <span>
              Readings <span
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  color: "#D4AF37",
                  fontSize: "1.3em"
                }}
              >Done</span> Right.
            </span>
          </h1>

          {/* SUBLINE */}
          <p className="text-[15px] text-gray-600 leading-relaxed max-w-md">
            Receive personal guidance and explore cosmic insights with clarity,
            intuition and spiritual connection.
          </p>

          {/* CALL TO ACTION BUTTONS */}
          <div className="flex gap-4 flex-wrap pt-2">
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
              style={{ border: "2px solid #D4AF37", background: "#fff", color: "#222" }}
            >
              Contact / Verify
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 pt-4 text-sm">
            <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">IG</div>
            <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">FB</div>
            <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">TW</div>
          </div>

          <p className="text-xs text-gray-500 pt-3">Private guidance via WhatsApp · Call Sessions Available</p>
        </div>
      </section>

    </header>
  );
}
