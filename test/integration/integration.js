var should = require('chai').should();
var cp = require('child_process');

describe('CLI', function () {
  it('should thank me for downloading', function (done) {
    cp.execFile('./app.js', function (err, stdout) {
      stdout.should.equal('thanks for downloading my app!!!!!!!')
      done();
    })
  })
});
