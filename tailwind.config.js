/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background": "#121212",
        "surface": "#121212",
        "surface-lvl1": "#1E1E1E",
        "surface-lvl2": "#2C2C2C",
        "primary": "#E53935",
        "secondary": "#37474F",
        "on-surface": "#FFFFFF",
        "on-surface-variant": "#B0BEC5",
        "success": "#66BB6A",
        "divider": "#37474F",
        "surface-bright": "#37393a",
        "surface-container-lowest": "#0c0f0f",
        "surface-container-low": "#1a1c1c",
        "surface-container": "#1E1E1E",
        "surface-container-high": "#282a2b",
        "surface-container-highest": "#2C2C2C",
        "primary-container": "#E53935",
        "on-primary": "#FFFFFF",
        "on-primary-container": "#FFFFFF",
        "secondary-container": "#37474F",
        "on-secondary-container": "#FFFFFF",
        "outline": "#37474F",
        "outline-variant": "#37474F",
        "error": "#E53935",
        "ivk-red": "#E53935",
        "ivk-black": "#121212"
      },
      boxShadow: {
        'glow': '0 0 20px 2px rgba(229, 57, 53, 0.4)',
        'glow-strong': '0 0 30px 5px rgba(229, 57, 53, 0.6)',
        'glow-sm': '0 0 10px 1px rgba(229, 57, 53, 0.3)',
        'industrial-lift': '0 8px 16px -4px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'gradient-ivk': 'linear-gradient(135deg, #E53935 0%, #B71C1C 100%)',
        'gradient-dark': 'linear-gradient(180deg, #1E1E1E 0%, #121212 100%)',
      },
      borderRadius: {
        "sm": "0.25rem", // 4px
        "DEFAULT": "0.25rem", // 4px
        "md": "0.375rem",
        "lg": "0.5rem", // 8px (Containers)
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "base": "8px",
        "xs": "4px",
        "sm": "12px",
        "md": "20px",
        "lg": "32px",
        "xl": "48px",
        "gutter": "16px",
        "margin-mobile": "20px"
      },
      fontFamily: {
        "display-lg": ["Montserrat", "sans-serif"],
        "headline-lg": ["Montserrat", "sans-serif"],
        "headline-lg-mobile": ["Montserrat", "sans-serif"],
        "headline-md": ["Montserrat", "sans-serif"],
        "body-lg": ["Montserrat", "sans-serif"],
        "body-md": ["Montserrat", "sans-serif"],
        "label-technical": ["JetBrains Mono", "monospace"],
        "label-sm": ["Montserrat", "sans-serif"]
      },
      fontSize: {
        "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
        "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "700" }],
        "headline-lg-mobile": ["28px", { "lineHeight": "34px", "fontWeight": "700" }],
        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "label-technical": ["14px", { "lineHeight": "20px", "fontWeight": "500" }],
        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600" }]
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
