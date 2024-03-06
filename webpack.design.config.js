const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const mf1 =  {
  entry: "./modules/design/styleD.css",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist/design"),
    port: 4800
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ],
  },
  output: {
      publicPath: "http://localhost:4800/",
      path: path.join(__dirname, "dist/design"),
      filename: '[name].js'
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ModuleFederationPlugin({
      name: "design",
      library: { type: "var", name: "design" },
      filename: "remoteEntry.js",
      exposes: {
        component: "./modules/design/styleD.css"
      },
        shared: ["rxjs"]
    })
  ]
};

module.exports = mf1;