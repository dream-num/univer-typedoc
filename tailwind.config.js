/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
  ],
  safelist: [
    'inline-flex',
    'flex',
    'text-xl',
    'items-center',
    'size-8',
    'gap-2',
    'font-semibold',
    'border-2 ',
    'border-stone-700',
    'rounded-md',
    'size-6',
    'justify-center',

  ],
  theme: {},
  plugins: [],
}
