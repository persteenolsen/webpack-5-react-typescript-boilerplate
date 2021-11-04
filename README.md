# Webpack 5 React Boilerplate

Webpack 5 boilerplate using React, TypeScript, Babel 7, PostCSS and Sass with a hot dev server and an optimized production build.

# Usage

# Development server:
npm run start

You can view the development server at `localhost:8080`.

# Production build:
npm run build

# To view the build use http-server:
npm prod

# Features

- [webpack](https://webpack.js.org/)
- [React](https://reactjs.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)

# Dependencies / devDependencies

# React


- [`react`](https://www.npmjs.com/package/react) - React is a JavaScript library for creating user interfaces. For creating React components.

- [`react-dom`](https://www.npmjs.com/package/react-dom) - This package serves as the entry point to the DOM and server renderers for React. 

- [`react-router-dom`](https://www.npmjs.com/package/react-router-dom) - This package serves as DOM for React Router. 


# TypeScript

- [`@babel/preset-typescript`] - Babel will be able to use TypeScript


# webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration

- [`fork-ts-checker-webpack-plugin`] - Lets Webpack do the TypeScript type checking instead of Babel or TypeScript compiler - TSC :

# Babel

- [`@babel/core`]
(https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/plugin-proposal-class-properties`]
(https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties on a class
- [`@babel/preset-env`]
(https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel
- [`@babel/plugin-transform-runtime`]
(https://babeljs.io/docs/en/babel-plugin-transform-runtime) - Helper for Babel to use async/await



# Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files - Babel/webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
  - [`node-sass`](https://github.com/sass/node-sass) - Node Sass
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
  - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

# Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - Optimize and minimize CSS assets

# Author

- Per Olsen

# License

This project is open source and available under the [MIT License](LICENSE).
