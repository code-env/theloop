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
        primaryDash: "var(--color-primary)",
      },
      textColor: {
        primary: "var(--color-orange)",
        secondary: "var(--color-blue)",
        aqua: "var(--color-aqua)",
        neutral: "var(--color-neutral)",
        p: "var(--color-black)",
        primaryDash: "var(--color-primary)",
      },
      borderColor: {
        primary: "var(--color-orange)",
        secondary: "var(--color-blue)",
        aqua: "var(--color-aqua)",
        neutral: "var(--color-neutral)",
        primaryDash: "var(--color-primary)",
      },
      boxShadow: {
        primary: "var(--shadow)",
      },
      fontFamily: {
        proxima: "var(--font-proxima)",
      },
    },
  },
  plugins: [],
};
