const pathtoresolve = require('path');
const paths = require('./paths')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Doing TypeScript type checking
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

//const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = {

  // Where webpack looks to start building the bundle and include polyfill
  entry: ['whatwg-fetch', paths.src + '/index.js'],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },


  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      'components': pathtoresolve.resolve(__dirname, '../src/components/'),
      'images': pathtoresolve.resolve(__dirname, '../src/images/'),
      'styles': pathtoresolve.resolve(__dirname, '../src/styles/'),
    }
  },


  // Customize the webpack build process
  plugins: [


    //new FriendlyErrorsPlugin(),

    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/template.html', // template file
      filename: 'index.html', // output file
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [

      // Note: These 2 rules could likely be handled in one test: statement.
      // However, using 2seperate statements each sttament could have different options if needed

      // Use Babel to transpile JavaScript ES6+ / React files to ES5
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      // Use Babel to transpile TypeScript and TypeScript / React files to ES5
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },
}
