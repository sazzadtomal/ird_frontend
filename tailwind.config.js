/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': {'max': '639px'},


      'sm-max': {'max': '767px'},
      'sm': {'min': '640px', 'max': '767px'},
      
      
      
      'md-min':{'min':'768px'},
      'md-max':{'max':'1139px'},
      'md':{'min':'768px','max':'1139px'},
      
      'lg-max': {'max': '1279px'},
      'lg-min':{'min':'1140px'},
      'lg': {'min': '1140px', 'max': '1279px'},

      'xl-max': {'max': '1639px'},
      'xl-min': {'min': '1280px'},
      'xl': {'min': '1280px', 'max': '1639px'},
      
      '2xl-min':{'min':'1640px'},
      '2xl': {'min': '1640px', 'max': '1919px'},
      '3xl': {'min': '1920px'},
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
