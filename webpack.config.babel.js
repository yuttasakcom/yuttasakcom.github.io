import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

export default {
  context: path.resolve(__dirname),
  entry: {
    app: "./src"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.runtime.common.js"
    },
    extensions: [".js", ".vue"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [path.join(__dirname, "src")],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html",
      inject: true
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  devServer: {
    inline: true
  },
  devtool: "#inline-cheap-module-source-map"
};
