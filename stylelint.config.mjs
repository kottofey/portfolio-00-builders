import sortOrderSmacss from "stylelint-config-property-sort-order-smacss/generate.js";

/** @type {import('stylelint').Config} */
export default {
  extends: [
    // "stylelint-config-recommended",
    "stylelint-config-recommended-scss",
    "stylelint-config-property-sort-order-smacss",
  ],
  plugins: ["stylelint-order", "stylelint-scss"],

  rules: {
    "rule-empty-line-before": ["always"],
    "order/properties-order": [sortOrderSmacss({ emptyLineBefore: "always" })],
  },
};
