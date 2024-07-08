/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSameLine: true,
  trailingComma: 'es5',
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
