<h1 >Welcome to @smccarrick/sm-config 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@smccarrick/sm-config" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@smccarrick/sm-config.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Configuration for eslint, typescript and prettier for react.

## Installation

```sh
npx install-peerdeps @smccarrick/sm-config -D
```

## Eslint

create an `.eslintrc.js` with the config below

```sh
module.exports = {
  extends: ["@smccarrick/sm-config/.eslintrc.js"]
    parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json", "./tsconfig.eslint.json"],
  },
}
```

## tsconfig

create an `tsconfig.eslint.json` with the below config

```sh
{
  "extends": "@smccarrick/sm-config/tsconfig.json",
  "include": [".eslintrc.js"]
}
```

create an `tsconfig.json` to extend our config

```sh
{
  "extends": "@smccarrick/sm-config/tsconfig.json",
  "include": ["**/*"],
}
```

Prettier comes integrated with eslint so no need to extend this config unless you want to use prettier separately to format other files such as `.yml`, `markdown ect`.

## Author

👤 **Stephen Mccarrick <smccarrick2804@gmail.com>**

- Github: [@SMccarrick](https://github.com/SMccarrick)
- LinkedIn: [@stephen-mccarrick](https://linkedin.com/in/stephen-mccarrick)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/SMccarrick/sm-config/issues).

## Show your support

Give a ⭐️ if this project helped you!
