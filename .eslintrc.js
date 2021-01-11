module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      modules: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "react",
    "react-hooks",
    "jsx-a11y",
    "prettier",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:testing-library/recommended",
    "plugin:jest-dom/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    "prettier/prettier": ["error", require("./prettier.config.ts")],
    "sort-imports": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/order": [
      "error",
      { "newlines-between": "always", alphabetize: { order: "asc" } },
    ],
    strict: ["error", "global"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
