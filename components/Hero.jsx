import { useState } from "react";

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
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7z" />
                  <circle cx="12" cy="12" r="3.2" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24">
                  <path d="M21.6 7.2c-.2-1-1-1.8-2-2C17.8 5 12 5 12 5s-5.8 0-7.6.4c-1 .2-1.8 1-2 2C2 9 2 12 2 12s0 3 .4 4.8c.2 1 1 1.8 2 2 1.8.4 7.6.4 7.6.4s5.8 0 7.6-.4c1-.2 1.8-1 2-2 .4-1.8.4-4.8.4-4.8s0-3-.4-4.8z" />
                  <polygon points="10,9 16,12 10,15" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/919718299989" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.5 2 2 6.1 2 11c0 2.1.8 4.1 2.2 5.7L3 22l5.5-1.8c1.1.4 2.3.6 3.5.6 5.5 0 10-4.1 10-9S17.5 2 12 2z" />
                </svg>
              </a>

              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24">
                  <path d="M13 3h4v4h-4v3h4l-1 4h-3v7h-4v-7H7v-4h2V7c0-2.8 1.7-4 4-4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
