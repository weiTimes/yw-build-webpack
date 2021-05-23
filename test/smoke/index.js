/*
 * @Author: yewei
 * @Date: 2021-05-22 23:00:42
 * @Last Modified by: yewei
 * @Last Modified time: 2021-05-23 13:16:18
 *
 * 冒烟测试
 * 判断构建是否成功
 */
const rimraf = require('rimraf');
const webpack = require('webpack');
const Mocha = require('mocha');
const path = require('path');

const mocha = new Mocha({
  timeout: '10000',
});

// 删除旧的构建产物
rimraf('../../dist', () => {
  const prodConfig = require('../../config/webpack.prod');

  webpack(prodConfig, (err, stats) => {
    if (err) {
      console.error(err);
      process.exit(2);
    }
    console.log(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
      })
    );

    console.log('webpack build succeeded, begin to test.');

    mocha.addFile(path.join(__dirname, './html-test.js'));
    mocha.addFile(path.join(__dirname, './js-css-test.js'));

    mocha.run();
  });
});
