<h1 >Welcome to @smccarrick/sm-config 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@smccarrick/sm-config" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@smccarrick/sm-config.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> my configuration for eslint, typescript and prettier.

## Installation for non React typescript projects

```sh
npx install-peerdeps @smccarrick/sm-config -D
```

You can use the `eslint-config.js` for standard typescript projects.

## Installation for React projects

```sh
yarn add @smccarrick/sm-config -D
```

Then install the required dependencies for the React eslint config

```sh
yarn add eslint-plugin-jest-dom eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-testing-library -D
```

## Eslint

- create an `.eslintrc.js` to extend our config

React
```sh
module.exports = {
  extends: ["@smccarrick/sm-config/eslint-config-react"]
}
```

Non React
```sh
module.exports = {
  extends: ["@smccarrick/sm-config/eslint-config"]
}
```

## tsconfig

- create an `tsconfig.json` to extend our config

```sh
{
  "extends": "@smccarrick/sm-config/tsconfig.json",
}
```


Prettier comes integrated with eslint so no need to extend this config unless you want to use prettier separately to format other files such as `.yml`, `markdown ect`.

## Author

👤 **Stephen Mccarrick <smccarrick2804@gmail.com>**

* Github: [@SMccarrick](https://github.com/SMccarrick)
* LinkedIn: [@stephen-mccarrick](https://linkedin.com/in/stephen-mccarrick)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/SMccarrick/sm-config/issues).

## Show your support

Give a ⭐️ if this project helped you!