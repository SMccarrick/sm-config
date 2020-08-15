module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  plugins: ["@typescript-eslint", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      modules: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    /**
     * 0 = disable
     * 1 = warning
     * 2 = error
     **/
    "prettier/prettier": [2, require("./prettier.config")],
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "strict": ["error", "global"],
  },
};
