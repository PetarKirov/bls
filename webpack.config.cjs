const ResolveTypeScriptPlugin = require("resolve-typescript-plugin");

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  output: {
    filename: "dist/bundle.js",
  },
  module: {
    rules: [{test: /\.(ts)$/, use: {loader: "ts-loader", options: {transpileOnly: true}}}],
  },
  optimization: {
    // Disable minification for better debugging on Karma tests
    minimize: false,
    //splitChunks: false, runtimeChunk: false,
  },
  devtool: "source-map",
  resolve: {
    plugins: [new ResolveTypeScriptPlugin()],
    fallback: {
      crypto: false,
      fs: false,
      path: false,
    },
  },
  experiments: {
    topLevelAwait: true,
  },
};
