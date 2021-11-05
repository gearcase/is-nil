import { expect } from 'chai';
import isNil from '../../index.js';

describe('is-nil', function () {
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
