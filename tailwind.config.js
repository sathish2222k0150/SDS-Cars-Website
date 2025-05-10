/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F2937',
          dark: '#111827',
          light: '#374151',
        },
        accent: {
          DEFAULT: '#DC2626',
          dark: '#B91C1C',
          light: '#EF4444',
        },
        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif'],
        },
        keyframes: {
          wiggle: {
            '0%, 100%': { transform: 'translateY(0) translateZ(-840px) rotateX(64deg) rotateY(-21deg) rotateZ(80deg) scale(0.9)' },
            '25%': { transform: 'translateY(0) translateZ(-820px) rotateX(66deg) rotateY(-24deg) rotateZ(84deg) scale(0.9)' },
            '50%': { transform: 'translateY(0) translateZ(-840px) rotateX(62deg) rotateY(-23deg) rotateZ(82deg) scale(0.9)' },
            '75%': { transform: 'translateY(0) translateZ(-840px) rotateX(63deg) rotateY(-19deg) rotateZ(78deg) scale(0.9)' },
          },
          fade: {
            '0%, 100%': { opacity: '0' },
            '50%': { opacity: '1' },
          },
          blink: {
            '0%, 100%': { opacity: '1' },
            '25%, 75%': { opacity: '0' },
          },
          intro: {
            '0%': { opacity: '0', transform: 'scale(0)' },
            '20%': { opacity: '1', transform: 'scale(1.2)' },
            '40%': { transform: 'scale(0.89)' },
            '60%': { transform: 'scale(1.04)' },
            '80%': { transform: 'scale(0.98)' },
            '100%': { opacity: '1', transform: 'scale(1)' },
          },
        },
        animation: {
          wiggle: 'wiggle 20s infinite linear',
          'fade-5s': 'fade 5s infinite',
          'fade-7s': 'fade 7s infinite',
          blink: 'blink 0.4s 0.4s',
          intro: 'intro 1s 1s forwards',
        },
        backgroundImage: {
          'radial-gradient': 'radial-gradient(ellipse at top left, rgba(222, 11, 70, 0.26) -160%, rgba(255, 255, 255, 0) 103%), radial-gradient(center, ellipse cover, #0C1019 0%, #0B0B0E 100%)',
        },
      }
    },
  },
  plugins: [],
};