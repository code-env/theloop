/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/component/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-orange)",
        secondary: "var(--color-blue)",
        aqua: "var(--color-aqua)",
        neutral: "var(--color-neutral)",
      },
      textColor: {
        primary: "var(--color-orange)",
        secondary: "var(--color-blue)",
        aqua: "var(--color-aqua)",
        neutral: "var(--color-neutral)",
      },
      borderColor: {
        primary: "var(--color-orange)",
        secondary: "var(--color-blue)",
        aqua: "var(--color-aqua)",
        neutral: "var(--color-neutral)",
      },
      boxShadow: {
        primary: "var(--shadow)",
      },
    },
  },
  plugins: [],
};
