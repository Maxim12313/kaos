/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mycyan: "var(--mycyan)",
        mygreen: "var(--mygreen)",
        "mydark-slate": "var(--mydark-slate)",
        myslate: "var(--myslate)",
        "mylight-slate": "var(--mylight-slate)",
      },
    },
  },
  plugins: [],
};
