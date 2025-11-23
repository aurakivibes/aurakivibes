
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#FFF7EA',
        parchmentSurface: '#FFF1DD',
        indigo: '#6B4EFF',
        antiqueGold: '#C09F5E',
        textPrimary: '#222222',
        textMuted: '#6B5B4B'
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Libre Franklin', 'sans-serif']
      },
      boxShadow: {
        'soft-card': '0 6px 24px rgba(16, 24, 40, 0.08)'
      }
    }
  },
  plugins: []
}
