/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Gill Sans']
      },
      colors: {
        'tenmansdark': '#112120',
        'tenmansblue': '#4361EE',
        'tenmansgreen': '#2BA84A',
        'tenmansyellow': '#FFCD56',
        'tenmansaccentyellow': '#E3B505',
        'tenmansred': '#C44536',
        'tenmanswhite': '#FFFFFF',
        'tenmanspurple': '#662E9B',
        'tenmansorange': '#DD6E42',
        'tenmansgrey': '#C9CBCE',
        'tenmanshighlight': '#E3B50533',
        'tenmanshighlightbold': '#E3B50580'
      }
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [
  ],
  purge: {
    content: [
     "./src/**/*.svelte",
    ]
  },
}