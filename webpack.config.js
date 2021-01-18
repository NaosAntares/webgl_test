var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
      index: './src/index.js',
      // three: './src/three.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
    },
    devServer: {
      contentBase: './dist',
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            "style-loader",
              // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
          ],
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
            }
          },
          {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'url-loader'
          }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Output Management',
        template: './src/index.html'
      }),
      new CleanWebpackPlugin(),
    ],
  };
  