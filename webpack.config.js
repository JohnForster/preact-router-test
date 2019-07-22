const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/client/index.tsx",
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js", ".jsx", '.tsx'],
    alias: {
      "react": "preact-compat",
      "react-dom": "preact-compat",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/client/index.html",
      filename: "index.html",
    })
  ]
}