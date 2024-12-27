/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: { 
        colors: { 
            mycolor: "rgba(250,250,250,0.34)", 
        }, 
    }, 
}, 
  plugins: [],
}