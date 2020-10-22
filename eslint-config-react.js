module.exports = {
  extends: [
    "./eslint-config.js",
    "plugin:react/recommended",
    "plugin:testing-library/recommended",
    "plugin:jest-dom/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  plugins: ["react", "react-hooks", "jsx-a11y", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    /**
     * 0 = disable
     * 1 = warning
     * 2 = error
     **/
    "react/prop-types": 0,
    "react/no-unescaped-entities": 0,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,
  },
};
