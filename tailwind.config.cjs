const plugin = require('tailwindcss/plugin');

const fixed = plugin(function ({ addVariant }) {
  addVariant('fixed', ['&.fixed', '.fixed &']);
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,svelte,ts,js}',
    './node_modules/daks-svelte/**/*.{svelte,html,ts,js}'
  ],

  darkMode: 'class',

  presets: [
    require('daks-svelte/assets/tailwindcss/presets/common.cjs'),
    require('daks-svelte/assets/tailwindcss/presets/font-family.cjs')
  ],

  theme: {
    extend: {
      backgroundImage: {
        loading: 'url(daks-svelte/assets/icons/loading/0.svg)',
        'loading-data': 'url(daks-svelte/assets/icons/loading/data.svg)'
      }
    }
  },

  plugins: [
    fixed
  ]
};
