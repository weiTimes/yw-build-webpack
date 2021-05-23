/*
 * @Author: yewei
 * @Date: 2021-05-23 13:37:49
 * @Last Modified by: yewei
 * @Last Modified time: 2021-05-23 15:56:22
 *
 * 测试 webapck 基础配置
 */
const assert = require('assert');

describe('webpack.common.js test case.', () => {
  const baseConfig = require('../../config/webpack.common');

  //   console.log(baseConfig);

  it('entry', () => {
    assert.strictEqual(
      baseConfig.entry.main.includes('yw-build-webpack/src/index.jsx'),
      true
    );
  });
});
