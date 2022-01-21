# Webpack 5 React TypeScript Boilerplate

Webpack 5 boilerplate using React, TypeScript, Babel 7, PostCSS and Sass with a hot dev server and an optimized production build. Babel compiles TypeScript to ES5. The Webpack plugin fork-ts-checker-webpack-plugin does the type checking. It is possible to use both React with JS in .jsx files and React with TS in .tsx files. Except from the main index.js and the webpack files the modules are ready in jsx and tsx.


# Usage

# Installing

- Make sure you have a new version of Node installed
- Download the code by zip or fork
- Run the command npm install by the command promt

# Development server:

- npm run start
- You can view the development server at `localhost:8080`.

# Production build:

- npm run build

# To view the build use http-server:

- npm run prod


# Features

- [webpack](https://webpack.js.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)


# Dependencies 

# React

- [`react`](https://www.npmjs.com/package/react) - React is a JavaScript library for creating user interfaces. For creating React components.
- [`react-dom`](https://www.npmjs.com/package/react-dom) - This package serves as the entry point to the DOM and server renderers for React. 
- [`react-router-dom`](https://www.npmjs.com/package/react-router-dom) - This package serves as DOM for React Router. 
- [`react-hook-form`](https://www.npmjs.com/package/react-hook-form) - Forms in Reack. 

# Babel

- [`@babel-runtime`](https://babeljs.io/docs/en/babel-runtime) - Babel Runtime for dev babel/plugin-transform-runtime.

# Other 

- [`core-js`](https://www.npmjs.com/package/core-js) - Main Library with polyfills for older Browsers
- [`whatwg-fetch`](https://www.npmjs.com/package/whatwg-fetch) - For making promise based web request progammitically


#  devDependencies

# TypeScript

- [`typescript`](https://www.npmjs.com/package/typescript) - TypeScript by NPM
- [`@babel/preset-typescript`](https://babeljs.io/docs/en/babel-preset-typescript) - Babel TypeScript
- [`@types/react`](https://www.npmjs.com/package/@types/react) - Typechecking React
- [`@types/react-dom`](https://www.npmjs.com/package/@types/react-dom) - Typechecking React Dom 

# webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify dev/prod configuration

# Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files - Babel/webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
- [`node-sass`](https://github.com/sass/node-sass) - Node Sass
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
- [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Default for PostCSS
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

# Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to ES5
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel
- [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-react) - Defaults Babel React
- [`@babel/plugin-transform-runtime`](https://babeljs.io/docs/en/babel-plugin-transform-runtime) - Babel to use async/await
- [`@babel/plugin-proposal-object-rest-spread`](https://babeljs.io/docs/en/plugin-proposal-object-rest-spread) - Babel helper
- [`@babel/plugin-transform-arrow-functions`](https://babeljs.io/docs/en/plugin-transform-arrow-functions) - For arrow functions
- [`@babel/plugin-transform-async-to-generator`](https://babeljs.io/docs/en/plugin-transform-async-to-generator) - Generator for async/await
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties on a class


# Plugins

- [`fork-ts-checker-webpack-plugin`](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin)  Handles the TypeScript type checking
- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - Optimize and minimize CSS assets
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration
- [`path`](https://www.npmjs.com/package/path) - Node Path moule
- [`http-server`](https://www.npmjs.com/package/http-server) - HTTP server for testing the produktion build by running npm run prod


# Author

- Per Olsen

# License

This project is open source and available under the [MIT License](LICENSE).
