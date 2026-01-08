import { useState } from "react";
import FreeReadingForm from "./FreeReadingForm";

export default function Hero() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <header className="hero-root">
      {/* LOGO */}
      <div className="hero-logo">
        <div className="hero-logo-circle">A</div>
        <h1>Aura Ki Vibes</h1>
      </div>

      {/* HERO CONTENT */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>
            Your Destiny Isn’t Hidden.
            <br />
            <span className="gold-underline">It’s Written.</span>
          </h2>

          <p>
            Understand what your chart reveals about love, career and purpose —
            guided by true astrology.
          </p>

          <div className="hero-cta">
            <button onClick={() => setOpenForm(true)}>
              Your First 111 Reading is Free
            </button>

            <a
              href="https://wa.me/919718299989"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>

            {/* SOCIAL ICONS */}
            <div className="hero-socials">
              <a
                href="https://www.instagram.com/aurakivibes"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/instagram.svg" alt="Instagram" />
              </a>

              <a
                href="https://youtube.com/@aurakivibes"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/youtube.svg" alt="YouTube" />
              </a>

              <a
                href="https://wa.me/919718299989"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/whatsapp.svg" alt="WhatsApp" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/facebook.svg" alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FORM POPUP (ONLY ONCE) */}
      {openForm && <FreeReadingForm onClose={() => setOpenForm(false)} />}
    </header>
  );
}
