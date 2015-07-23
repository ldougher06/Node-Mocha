var path = require('path');
var should = require('chai').should();

var thanks = require(path.join(process.cwd(), '/lib/thanks'));

describe('Thanks', function () {
  it('should thank me for downloading', function () {
    thanks.should.equal('thanks for downloading my app');
  })
})
