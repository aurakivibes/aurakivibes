
import Image from 'next/image'
export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-sm font-medium text-textMuted">Our Astrologers · About · Blog · Contact</p>
            <h1 className="text-5xl md:text-6xl font-heading leading-tight text-textPrimary">
             AURA KI VIBES<br/>
              <span className="text-5xl md:text-6xl font-heading">
                AURA KI VIBES <span className="text-antiqueGold">AURA KI VIBES.</span>
              </span>
            </h1>
            <p className="max-w-xl text-lg text-textMuted">
              We are reimagining the way people access Astrology Service...
            </p>
            <div className="flex items-center gap-4">
              <a href="#chart" className="inline-flex items-center px-6 py-3 rounded-full bg-indigo text-white font-semibold shadow-soft-card">
                View Our Specialist astrologers
              </a>
              <button className="inline-flex items-center px-5 py-2 rounded-full border border-antiqueGold text-textPrimary font-medium bg-transparent">
                Login / Register
              </button>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <div className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">IG</div>
              <div className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">LI</div>
              <div className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">FB</div>
              <div className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">TW</div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-md mx-auto">
              <Image src={'/images/hero-sun.png'} alt="decorative sun" width={720} height={720}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
