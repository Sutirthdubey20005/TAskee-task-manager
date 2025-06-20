/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Fira Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        brand: {
          orange: "#f97316",  // Taskee Orange
          yellow: "#facc15",  // Taskee Yellow
          dark: "#1f2937",    // Neutral dark
          blue: "#2563eb",    // Optional blue
          pink: "#ec4899",    // Accent pink
          green: "#22c55e",   // Success green
        },
        accent: {
          light: "#f3f4f6",   // Gray-100
          DEFAULT: "#6366f1", // Indigo-500
          dark: "#312e81",    // Indigo-900
        },
      },
      boxShadow: {
        awesome: '0 4px 20px 0 rgba(34,197,94,0.15), 0 1.5px 4px 0 rgba(59,130,246,0.10)',
      },
      borderRadius: {
        awesome: '1.5rem', // rounded-awesome
      },
      transitionProperty: {
        awesome: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      },
    },
  },
  plugins: [],
}
