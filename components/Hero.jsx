// components/Hero.jsx
import Link from 'next/link'

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-[#f5ebd8]">
      {/* Top Nav */}
      <nav className="container py-4 md:py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="logo-mark">A</div>
          <div className="font-medium text-sm md:text-base">Aura Ki Vibes</div>
        </div>

        <div className="hidden md:flex items-center gap-4 text-xs md:text-sm">
          <Link href="#astrologers">
            <a style={{ color: 'var(--textMuted)' }}>Our Astrologers</a>
          </Link>
          <Link href="#about">
            <a style={{ color: 'var(--textMuted)' }}>About</a>
          </Link>
          <Link href="#blog">
            <a style={{ color: 'var(--textMuted)' }}>Blog</a>
          </Link>
          <Link href="#contact">
            <a style={{ color: 'var(--textMuted)' }}>Contact</a>
          </Link>

          <button className="btn-outline-gold ml-2">
            Login / Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-10 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT – text */}
          <div className="space-y-6 max-w-xl">
            <p className="text-xs md:text-sm" style={{ color: 'var(--textMuted)' }}>
              Our Astrologers · About · Blog · Contact
            </p>

            <h1 className="hero-headline leading-tight">
              Aura Ki Vibes
              <br />
              <span>
                Readings{' '}
                <span className="font-script" style={{ color: 'var(--antiqueGold)' }}>
                  Done
                </span>{' '}
                Right.
              </span>
            </h1>

            <p className="hero-lead text-sm md:text-base">
              Detailed natal charts, daily guidance and trusted astrologers — all presented
              with a warm, elegant feel.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#astrologers" className="btn-primary text-sm md:text-base text-center">
                View Our Specialist astrologers
              </a>
              <a
                href="#contact"
                className="btn-outline-gold text-sm md:text-base text-center"
                style={{ paddingInline: '18px', paddingBlock: '10px' }}
              >
                Contact / Verify
              </a>
            </div>

            <div className="flex gap-3 mt-2" aria-hidden>
              <div className="icon-circle text-xs md:text-sm">IG</div>
              <div className="icon-circle text-xs md:text-sm">FB</div>
              <div className="icon-circle text-xs md:text-sm">TW</div>
            </div>
          </div>

          {/* RIGHT – IMAGE DIRECTLY */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/hero-bg.png"
              alt="Aura hero"
              className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg object-contain"
            />
          </div>
        </div>
      </section>
    </header>
  )
}
