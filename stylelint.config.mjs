export default {
  extends: ["@discourse/lint-configs/stylelint"],
  ignoreFiles: ["scss/mza-tailwind.scss"],
  rules: {
    // Use prefix notation (max-width/min-width) instead of range notation
    // for broad browser compatibility including iOS Safari.
    "media-feature-range-notation": "prefix",
  },
};
