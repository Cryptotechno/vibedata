module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'navy': '#0E1C28',
          'fuchsia': '#EB3B77',
          'vivid-blue': '#2D61E8',
          'teal': '#56D1D1',
          'deep-orange': '#EF6C3D'
        },
        fontFamily: {
          manrope: ['Manrope', 'sans-serif']
        },
        backgroundImage: {
          'brand-gradient': 'linear-gradient(135deg, #EB3B77 0%, #EF6C3D 100%)',
          'grid-pattern': "url('/grid.svg')"
        },
        boxShadow: {
          'glow': '0 0 50px -12px rgba(235, 59, 119, 0.25)',
          'glow-lg': '0 0 65px -12px rgba(235, 59, 119, 0.30)',
          '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.25)'
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' }
          },
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' }
          },
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' }
          },
          scaleIn: {
            '0%': { opacity: '0', transform: 'scale(0.9)' },
            '100%': { opacity: '1', transform: 'scale(1)' }
          }
        },
        animation: {
          float: 'float 3s ease-in-out infinite',
          fadeIn: 'fadeIn 0.6s ease-out forwards',
          fadeInUp: 'fadeInUp 0.6s cubic-bezier(0.37, 0, 0.63, 1) forwards',
          scaleIn: 'scaleIn 0.6s cubic-bezier(0.37, 0, 0.63, 1) forwards'
        }
      },
    },
    plugins: [],
  };