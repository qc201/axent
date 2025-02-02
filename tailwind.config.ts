import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
      14: "14",
      15: "15",
      16: "16",
    },
    variants: {
      aspectRatio: ["responsive", "hover"],
    },
    extend: {
      animation: {
        "text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
        "bg-img-appear": "img-flip 1s  cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
      },
      backgroundImage: {
        designers: 'url("/products_img/designer1920_1080.png")',
        techStyle: 'url("/products_img/tech_style.jpg")',
        intelligentHeader: 'url("/live_img/intelligent-header-1024_600.png")',
        regularHeader: 'url("/products_img/primus-1-1024_600.png")',
        basinHeader: 'url("/live_img/basin-header-1024_600.png")',
        partsHeader: 'url("/live_img/parts-header-1024_600.png")',
        mintHeader: 'url("/live_img/mint-header-1024_600.png")',
        mintHeaderM: 'url("/live_img/mint-header-9_16.png")',
        tubGril: 'url("/live_img/mint-tub-girl-pink.png")',
        toiletGril: 'url("/live_img/mint-toilet-girl-gray.png")',
        greenBg: 'url("/live_img/mint-tub-white-green-background.png")',
        mintGreen: 'url("/live_img/mint-green-background.png")',
        noviaHeader: 'url("/products_img/novia-cover-1024_600.png")',
        noviaTub: 'url("/products_img/novia-5.png")',
        noviaBlackWhite: 'url("/products_img/novia-6.png")',
        contactHeader: 'url("/live_img/contact-header.jpg")',
        aboutHeader: 'url("/live_img/about-header.png")',
      },
      fontFamily: {
        custom: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#393E46",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // ...
  ],
};
export default config;
