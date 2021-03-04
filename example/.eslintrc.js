module.exports = {
  extends: ["node_modules/@smccarrick/sm-config/.eslintrc.js"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["tsconfig.json", "tsconfig.eslint.json"],
  },
}