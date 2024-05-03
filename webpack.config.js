const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const path = require("path");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, "build"),
    filename: "js/[name].js",
  },
  optimization: {
    minimize: true,
    minimizer: [ new TerserPlugin() ],
    splitChunks: {
      chunks: 'all',
      minSize: 200 * 1024, // 200 KB
      maxSize: 500 * 1024, // 500 KB, for example
    },
  },
  performance: false,
  module: {
    rules: [
      {
        test: /\.(sass|css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|avif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images",
            },
            },
            
        ],
      },
      {
        test: /\.svg$/,
        use: 'raw-loader'
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: "fonts",
            }
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    watchFiles: path.join(__dirname, 'src'),
    port: 9000,
    open: true,
    devMiddleware: {
      writeToDisk: true,
      stats: "errors-only",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/the-tourist-tour.html",
      filename: "the-tourist-tour.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/the-tourist-tour-2.html",
      filename: "the-tourist-tour-2.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/register.html",
      filename: "register.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/login.html",
      filename: "login.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
    new WebpackManifestPlugin(),
  ],
};
