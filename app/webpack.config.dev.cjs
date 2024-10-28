const path = require("path"),
  wp = require("webpack"),
  packageJson = require("./package.json"),
  HtmlWp = require("html-webpack-plugin"),
  HtmlRepWp = require("html-replace-webpack-plugin"),
  MiniCssExtract = require("mini-css-extract-plugin"),
  CopyWp = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.tsx",
  devtool: "source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".scss", ".css"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  output: {
    filename: `bundle.min.js`,
    path: path.resolve(__dirname, "dev"),
    publicPath: "",
    crossOriginLoading: "anonymous",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              compilerOptions: {
                jsx: "react-jsx",
              },
            },
          },
        ],
        exclude: [/node_modules/, /vite.config.ts/, /vite.config.js/, /wpBanned.scss/],
      },
      {
        test: /\.(js|jsx|ts|tsx|scss|css)$/i,
        use: [
          {
            loader: "string-replace-loader",
            options: {
              multiple: [
                {
                  search: "/img/",
                  replace: "assets/img/",
                  flags: "g",
                },
                {
                  search: 'href="/',
                  replace: 'href="assets/',
                  flags: "g",
                },
                {
                  search: 'src="/',
                  replace: 'src="assets/',
                  flags: "g",
                },
                {
                  search: 'src="\\.\\.\\assets/',
                  replace: 'src="assets/',
                  flags: "g",
                },
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtract.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtract.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[contenthash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new wp.DefinePlugin({
      VERSION: JSON.stringify(packageJson?.version),
    }),
    new HtmlWp({
      template: "./index.html",
      inject: "body",
      scriptLoading: "module",
    }),
    new HtmlRepWp([
      {
        pattern: /\/img\//g,
        replacement: "assets/img/",
      },
      {
        pattern: /href="public/g,
        replacement: 'href="assets',
      },
      {
        pattern: /href="\//g,
        replacement: 'href="assets/',
      },
      {
        pattern: /"\/images\//g,
        replacement: "images/",
      },
      {
        pattern: /<script\s+type="module"\s+src="\/src\/main\.tsx"\s*><\/script>/g,
        replacement: () => ``,
      },
    ]),
    new CopyWp({
      patterns: [{ from: "public", to: "assets" }],
    }),
    new MiniCssExtract({
      filename: `style.min.css`,
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dev"),
    },
    compress: true,
    port: 9000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
