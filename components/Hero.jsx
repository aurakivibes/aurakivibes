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
    <svg viewBox="0 0 448 512" aria-hidden="true">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.2 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.7-9.9-67.3-36.2-93.6S356.5 35.8 320.8 34.1c-35.7-1.7-142.8-1.7-178.5 0-35.7 1.7-67.3 9.9-93.6 36.2S35.8 155.5 34.1 191.2c-1.7 35.7-1.7 142.8 0 178.5 1.7 35.7 9.9 67.3 36.2 93.6s57.9 34.5 93.6 36.2c35.7 1.7 142.8 1.7 178.5 0 35.7-1.7 67.3-9.9 93.6-36.2s34.5-57.9 36.2-93.6c1.7-35.7 1.7-142.8 0-178.5z"/>
    </svg>
  </a>

  {/* YouTube */}
  <a href="https://youtube.com" target="_blank" rel="noreferrer">
    <svg viewBox="0 0 576 512">
      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.5-48.5C456.9 64 288 64 288 64S119.1 64 74.8 75.6c-23.7 6.3-42.3 24.8-48.5 48.5C14.7 168.4 14.7 256 14.7 256s0 87.6 11.6 131.9c6.3 23.7 24.8 42.3 48.5 48.5C119.1 448 288 448 288 448s168.9 0 213.2-11.6c23.7-6.3 42.3-24.8 48.5-48.5 11.6-44.3 11.6-131.9 11.6-131.9s0-87.6-11.6-131.9zM232 334V178l142 78-142 78z"/>
    </svg>
  </a>

  {/* WhatsApp */}
  <a href="https://wa.me/919718299989" target="_blank" rel="noreferrer">
    <svg viewBox="0 0 448 512">
      <path d="M380.9 97.1C339-15.6 208.5-29.2 112.1 33.1c-94.4 61-113.7 183.4-52.4 273.7L32 480l176.9-46.4c83.8 41.3 187.5 12.3 238.6-69.3 51.1-81.7 33.6-186.6-66.6-267.2z"/>
    </svg>
  </a>

  {/* Facebook */}
  <a href="https://facebook.com" target="_blank" rel="noreferrer">
    <svg viewBox="0 0 320 512">
      <path d="M279.14 288l14.22-92.66h-88.91V127.41c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
    </svg>
  </a>
</div>
          </div>
        </div>
      </section>
    </header>
  );
}
