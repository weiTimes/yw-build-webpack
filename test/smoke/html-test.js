/*
 * @Author: yewei
 * @Date: 2021-05-23 13:02:25
 * @Last Modified by: yewei
 * @Last Modified time: 2021-05-23 13:21:25
 *
 * 检查构建产物是否有 html
 */

const glob = require('glob-all');
const path = require('path');

const pathJoin = (file) => path.join(__dirname, `../../dist/${file}`);

describe('构建产物中是否存在 html', () => {
  it('should generate html files', (done) => {
    const files = glob.sync([
      pathJoin('index.html'),
      pathJoin('about.html'),
      pathJoin('study.html'),
      pathJoin('think.html'),
    ]);

    if (files.length > 0) {
      done();
    } else {
      throw new Error('no html files generated');
    }
  });
});
