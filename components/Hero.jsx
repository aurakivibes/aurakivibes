// components/Hero.jsx
import Image from 'next/image'
import Link from 'next/link'

export default function Hero(){
  return (
    <header className="site-vignette relative overflow-hidden">
      {/* Top nav */}
      <nav className="container py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="logo-mark">A</div>
          <div className="font-medium">Aura Ki Vibes</div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/blog"><a className="text-sm" style={{color:'var(--textMuted)'}}>Blog</a></Link>
          <Link href="#contact"><a className="text-sm" style={{color:'var(--textMuted)'}}>Contact</a></Link>
          <button className="btn-outline-gold">Login / Register</button>
        </div>
      </nav>

      {/* Hero area */}
      <section className="container hero" aria-label="Hero">
        <div className="hero-grid">

          {/* Left column */}
          <div className="hero-left hero-highlight">
            <p className="text-sm" style={{color:'var(--textMuted)'}}>Our Astrologers · About · Blog · Contact</p>

            <h1 className="hero-headline" style={{marginTop:8}}>
              Aura Ki Vibes
              <br />
              <span>
                Readings <span className="font-script">Done</span> Right.
              </span>
            </h1>

            <p className="hero-lead">
              Detailed natal charts, daily guidance and trusted astrologers — all presented with a warm, elegant feel.
            </p>

            <div className="hero-ctas">
              <a href="#astrologers" className="btn-primary">View Our Specialist astrologers</a>
              <a href="#contact" className="btn-outline-gold" style={{padding:'10px 16px'}}>Contact / Verify</a>
            </div>

            <div className="social-row" aria-hidden>
              <div className="icon-circle">IG</div>
              <div className="icon-circle">FB</div>
              <div className="icon-circle">TW</div>
            </div>
          </div>

          {/* Right column (sun image) */}
          <div className="hero-right">
            <div className="sun-wrap">
              <Image
                src="/mnt/data/A_vintage-style_celestial_illustration_of_the_sun_.png"
                alt="hero-sun.png"
                width={820}
                height={820}
                className="object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </section>
    </header>
  )
}
