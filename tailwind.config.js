module.exports = {
  purge: {
    enabled: false, //toggle
    content: ['./src/*.php', './src/*.js'],
  },
  theme: {},
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
