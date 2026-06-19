/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 18px 50px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(59,130,246,0.18), transparent 40%)',
      },
    },
  },
  plugins: [],
}
