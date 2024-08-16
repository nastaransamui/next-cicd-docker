import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
delete (colors as any).lightBlue;
delete (colors as any).warmGray;
delete (colors as any).trueGray;
delete (colors as any).coolGray;
delete (colors as any).blueGray;
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
};
export default config;
