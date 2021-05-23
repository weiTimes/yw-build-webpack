/*
 * @Author: yewei
 * @Date: 2021-05-23 13:02:25
 * @Last Modified by: yewei
 * @Last Modified time: 2021-05-23 13:22:03
 *
 * 检查构建产物是否有 js, css
 */
/*
 * @Author: yewei
 * @Date: 2021-05-23 13:02:25
 * @Last Modified by: yewei
 * @Last Modified time: 2021-05-23 13:09:02
 *
 * 检查构建产物是否有 html
 */

const glob = require('glob-all');
const path = require('path');

const pathJoin = (file) => path.join(__dirname, `../../dist/${file}`);

describe('构建产物中是否存在 js,css', () => {
  it('should generate js,css files', (done) => {
    const files = glob.sync([pathJoin('*.js'), pathJoin('*.css')]);

    if (files.length > 0) {
      done();
    } else {
      throw new Error('no js,css files generated');
    }
  });
});
