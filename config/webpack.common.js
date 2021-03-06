const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const glob = require('glob');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');

// 设置多页打包，思路是使用 glob 解析出对应的入口文件，然后设置对应的 entry 和 HtmlWebpackPlugin
function setMpa() {
  const entry = {};
  const htmlWebpackPlugins = [];

  const pagePaths = glob.sync(path.join(__dirname, '../src/mpa/**/index.jsx'));

  pagePaths.forEach((pagePath) => {
    const name = pagePath.match(/src\/mpa\/(.*)\/index\.js/)[1];

    entry[name] = pagePath;
    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        filename: `${name}.html`,
        chunks: [name],
        template: path.join(__dirname, '../', `src/mpa/${name}/index.html`),
      })
    );

    return name;
  });

  return {
    entry,
    htmlWebpackPlugins,
  };
}

const { entry, htmlWebpackPlugins } = setMpa();

module.exports = {
  target: 'web',
  entry: Object.assign(entry, {
    main: path.join(__dirname, '../src/index.jsx'),
    // work: path.join(__dirname, '../src/work.js'),
  }),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../', 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source',
      },
    ],
  },
  plugins: [
    // ...htmlWebpackPlugins,
    new HtmlWebpackPlugin({
      chunks: ['main'],
      template: path.join(__dirname, '../', 'public/index.ejs'),
    }),
    new FriendlyErrorsWebpackPlugin(),
    function handleError() {
      // this 指向 compiler
      this.hooks.done.tap('done', (stats) => {
        if (
          stats.compilation.errors &&
          stats.compilation.errors.length &&
          process.argv.includes('--watch')
        ) {
          process.exit(1); // 抛出异常，终端就知道构建失败了
        }
      });
    },
  ].concat(htmlWebpackPlugins),
};
