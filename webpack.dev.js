const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/dist")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      { test: /\.(png|svg|jpg|gif)$/, loader: "file-loader" },
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: "babel-loader",
        exclude: /node_modules/
      },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devServer: {
    stats: {
      children: false,
      maxModules: 0
    },
    port: 3001
  }
};
