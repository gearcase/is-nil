'use strict';

var expect = require('chai').expect;


describe('is-nil', function () {

  var isNil = require('../../');

  it('common test', function () {
    expect(isNil(null)).to.be.true;
    expect(isNil(void 0)).to.be.true;
    expect(isNil('abc')).to.be.false;
    expect(isNil(123)).to.be.false;
    expect(isNil(true)).to.be.false;
    expect(isNil({})).to.be.false;
    expect(isNil([])).to.be.false;
    expect(isNil(NaN)).to.be.false;
  });
});
