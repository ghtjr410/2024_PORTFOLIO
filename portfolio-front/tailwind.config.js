/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        'extra-black': 1000, // 사용자 정의 폰트 굵기
      },
    },
  },
  plugins: [],
}