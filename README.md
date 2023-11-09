# typedoc-material-theme

[![npm version](https://img.shields.io/npm/v/typedoc-material-theme)](https://www.npmjs.com/package/typedoc-material-theme)
[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://www.npmjs.com/package/typedoc-material-theme)
[![npm minzipped size](https://img.shields.io/bundlephobia/minzip/typedoc-material-theme)](https://bundlephobia.com/package/typedoc-material-theme)
[![dependencies](https://img.shields.io/librariesio/release/npm/typedoc-material-theme)](https://github.com/dmnsgn/typedoc-material-theme/blob/main/package.json)
[![types](https://img.shields.io/npm/types/typedoc-material-theme)](https://github.com/microsoft/TypeScript)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-fa6673.svg)](https://conventionalcommits.org)
[![styled with prettier](https://img.shields.io/badge/styled_with-Prettier-f8bc45.svg?logo=prettier)](https://github.com/prettier/prettier)
[![linted with eslint](https://img.shields.io/badge/linted_with-ES_Lint-4B32C3.svg?logo=eslint)](https://github.com/eslint/eslint)
[![license](https://img.shields.io/github/license/dmnsgn/typedoc-material-theme)](https://github.com/dmnsgn/typedoc-material-theme/blob/main/LICENSE.md)

A TypeDoc theme based on [Material 3](https://m3.material.io/).

[![paypal](https://img.shields.io/badge/donate-paypal-informational?logo=paypal)](https://paypal.me/dmnsgn)
[![coinbase](https://img.shields.io/badge/donate-coinbase-informational?logo=coinbase)](https://commerce.coinbase.com/checkout/56cbdf28-e323-48d8-9c98-7019e72c97f3)
[![twitter](https://img.shields.io/twitter/follow/dmnsgn?style=social)](https://twitter.com/dmnsgn)

![](https://raw.githubusercontent.com/dmnsgn/typedoc-material-theme/main/screenshot.png)

## Installation

```bash
npm install typedoc-material-theme
```

## Usage

This plugin add a `themeColor` option to `typedoc`: the Material 3 source color to derive the theme from.

In CLI:

```bash
typedoc src/** --plugin typedoc-material-theme --themeColor '#cb9820'
```

or in `typedoc.js`:

```json5
{
  plugin: ["typedoc-material-theme"],
  themeColor: "#cb9820",
  // ... other options
}
```

Default fonts (changeable with [customCss](https://typedoc.org/options/output/#customcss)):
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- [Space Mono](https://fonts.google.com/specimen/Space+Mono)

## Documentation

Example [generated docs of this package](https://dmnsgn.github.io/typedoc-material-theme/)

![](https://raw.githubusercontent.com/dmnsgn/typedoc-material-theme/main/variations.png)

## License

MIT. See [license file](https://github.com/dmnsgn/typedoc-material-theme/blob/main/LICENSE.md).
