import type {Config} from 'tailwindcss';

const config: Config = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}'
   ],
   theme: {
      extend: {
         colors: {
            navy: {
               main: '#0d4c84'
            }
         }
      }
   },
   plugins: [
      require('@tailwindcss/forms')
   ]
};

export default config;
