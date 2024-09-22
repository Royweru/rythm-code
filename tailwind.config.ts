import type { Config } from "tailwindcss";
import plugin from "tailwindcss";
const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
     "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			background: {
  				DEFAULT: '#F3F2ED'
  			},
  			blue: {
  				dark1: '#0c1926',
  				dark2: '#0d1b2a',
  				dark3: '#1b263b',
  				navy: '#acb7c3',
  				light: '#778da9'
  			},
  			text: {
  				black: '#000000',
  				blackgrey: '#444444',
  				accent: '#ffb1b1'
  			},
  			shade: {
  				purple: '#9747ff',
  				yellow: '#fbc31f',
  				red: '#fc2525'
  			}
  		},
  		fontFamily: {
  			montserrat: 'var(--font-motserrat)',
  			gothic: 'var(--font-gothic)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  presets: [require("@relume_io/relume-tailwind")],
  // plugins: [
  //   // eslint-disable-next-line @typescript-eslint/no-require-imports
  //   require("tailwindcss-animate"),
  //   plugin(function ({ addBase, addComponents, addUtilities }) {
  //     addBase({});
  //     addComponents({
  //       ".container": {
  //         "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
  //           {},
  //       },
  //       ".h1": {
  //         "@apply font-bold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem]  lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
  //           {},
  //       },
  //       ".h2": {
  //         "@apply text-[1.75rem] font-bold leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
  //           {},
  //       },
  //       ".h3": {
  //         "@apply text-[2rem] leading-normal md:text-[2.5rem] font-semibold": {},
  //       },
  //       ".h4": {
  //         "@apply text-[2rem] leading-normal font-semibold": {},
  //       },
  //       ".h5": {
  //         "@apply text-2xl leading-normal font-semibold": {},
  //       },
  //       ".h6": {
  //         "@apply font-semibold text-lg leading-8 font-semibold": {},
  //       },
  //     });
  //     addUtilities({
  //       ".tap-highlight-color": {
  //         "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
  //       },
  //     });
  //   }),
  // ],
    plugins: [require("tailwindcss-animate")]
};
export default config;
