const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addVariant }) {
  addVariant('current', '&[data-current]');
  addVariant('fixed', ['&.fixed', '.fixed &']);
});
