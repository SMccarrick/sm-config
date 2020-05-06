module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
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
    "@typescript-eslint/no-var-requires": 0,
    "react/prop-types": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "strict": ["error", "global"],
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,
  },
};
