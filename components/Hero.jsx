import Image from 'next/image'
import Link from 'next/link'

export default function Hero(){
  return (
    <header className="relative overflow-hidden">
      {/* Top nav */}
      <nav className="container py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center font-semibold">A</div>
          <div className="font-medium">Aura Ki Vibes</div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/blog"><a className="text-sm" style={{color:'var(--textMuted)'}}>Blog</a></Link>
          <Link href="#contact"><a className="text-sm" style={{color:'var(--textMuted)'}}>Contact</a></Link>
          <button className="px-4 py-2 rounded-full border" style={{borderColor:'var(--antiqueGold)', background:'#fff', color:'var(--textPrimary)'}}>Login / Register</button>
        </div>
      </nav>

      {/* Hero area */}
      <section className="container pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left column: headline & CTAs */}
          <div className="space-y-6">
            <p className="text-sm" style={{color:'var(--textMuted)'}}>Our Astrologers · About · Blog · Contact</p>

            <h1 className="hero-headline font-heading" style={{fontFamily:'Playfair Display, serif', color:'var(--textPrimary)'}}>
              Aura Ki Vibes
              <br />
              <span style={{fontFamily:'Playfair Display, serif'}}>
                Readings <span className="font-script" style={{color:'var(--antiqueGold)', fontSize:'1.1em'}}>Done</span> Right.
              </span>
            </h1>

            <p className="max-w-xl" style={{color:'var(--textMuted)'}}>
              Detailed natal charts, daily guidance and trusted astrologers — all presented with a warm, elegant feel.
            </p>

            <div className="flex items-center gap-4">
              <a href="#astrologers" className="inline-flex items-center px-6 py-3 rounded-full shadow-soft" style={{background:'var(--indigo)', color:'#fff', fontWeight:600}}>
                View Our Specialist astrologers
              </a>

              <a href="#contact" className="inline-flex items-center px-5 py-2 rounded-full" style={{border:`2px solid var(--antiqueGold)`, color:'var(--textPrimary)'}}>
                Contact / Verify
              </a>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">IG</div>
              <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">FB</div>
              <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">TW</div>
            </div>
          </div>

          {/* Right column: decorative sun image positioned large and slightly overlapping */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md lg:mr-8">
              {/* PRODUCTION: use /images/hero-sun.png (place your uploaded image here) */}
              <Image src={'/images/hero-sun.png'} alt="decorative sun" width={720} height={720} className="object-contain" />
              {/* TEMP TEST (local path you uploaded): '/mnt/data/04d6050b-2224-48ac-8c78-e907121a3e58.png' */}
            </div>
          </div>

        </div>
      </section>

      {/* subtle paper overlay for warmth (uses public/images/paper-texture.png) */}
      <div className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-30" style={{backgroundImage:'url(/images/paper-texture.png)', backgroundSize:'cover'}} />
    </header>
  )
}
