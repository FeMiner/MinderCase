const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: "development",
  // JS 执行入口文件
  entry: {
    minder: "./public/pages/minder/index.jsx"
  },
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: "[name].js",
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, "./public/dist")
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css"
    })
  ],
  module: {
    rules: [
      {
        test:  [/\.js?$/, /\.jsx?$/, /\.tsx?$/],
        use: ["babel-loader"],
        // 排除 node_modules 目录下的文件，node_modules 目录下的文件都是采用的 ES5 语法，没必要再通过 Babel 去转换
        exclude: path.resolve(__dirname, "node_modules")
      },
      {
        // 增加对 SCSS 文件的支持
        test: /\.scss/,
        // SCSS 文件的处理顺序为先 sass-loader 再 css-loader 再 style-loader
        use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ]
  },
  devtool: "source-map" ,// 输出 source-map 方便直接调试 ES6 源码

   // 只有在开启监听模式时，watchOptions 才有意义
  // 默认为 false，也就是不开启
  watch: true,
  // 监听模式运行时的参数
  // 在开启监听模式时，才有意义
  watchOptions: {
    // 不监听的文件或文件夹，支持正则匹配
    // 默认为空
    ignored: /node_modules/,
    // 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高
    // 默认为 300ms
    aggregateTimeout: 300,
    // 判断文件是否发生变化是通过不停的去询问系统指定文件有没有变化实现的
    // 默认每秒问 1000 次
    poll: 1000
  }

};
