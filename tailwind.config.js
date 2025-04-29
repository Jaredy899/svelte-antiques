/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        logo: {
          50: 'rgb(var(--color-logo-50) / <alpha-value>)',
          100: 'rgb(var(--color-logo-100) / <alpha-value>)',
          200: 'rgb(var(--color-logo-200) / <alpha-value>)',
          300: 'rgb(var(--color-logo-300) / <alpha-value>)',
          400: 'rgb(var(--color-logo-400) / <alpha-value>)',
          500: 'rgb(var(--color-logo-500) / <alpha-value>)',
          600: 'rgb(var(--color-logo-600) / <alpha-value>)',
          700: 'rgb(var(--color-logo-700) / <alpha-value>)',
          800: 'rgb(var(--color-logo-800) / <alpha-value>)',
          900: 'rgb(var(--color-logo-900) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Crimson Text', 'Georgia', 'serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
} 