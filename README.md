<p align="center">Webpack + TypeScript + React = ❤️</p>
<p align="center">
  <img src="https://img.shields.io/github/license/saltyshiomix/webpack-typescript-react-starter.svg" alt="Package License (MIT)">
</p>

As of Babel v7, now we can handle `.ts` or `.tsx` files same as `.js` or `.jsx` files like this:

```js
// webpack.config.js

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
}
```

**Use `babel-loader` to `/\.tsx?$/` ?!**

Yes, `babel-loader`. See `.babelrc`:

```json
{
  "presets": [
    "@babel/env",
    "@babel/react",
    "@babel/typescript"
  ]
}
```

Thanks to `@babel/preset-typescript`, we can handle `/\.tsx?$/` files same as `/\.jsx?$/` files :)

## Usage

```bash
# installation
$ yarn

# development mode
# it automatically opens `http://localhost:8080` in your default browser,
# and you'll see "Webpack + TypeScript + React = ❤️"
$ yarn dev

# check types
$ yarn check-types

# production build
$ yarn build

# production mode
$ yarn start
```
