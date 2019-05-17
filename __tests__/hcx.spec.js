const HCX = require('../');
const hcx = new HCX();

describe('HCX', () => {
  it ('loads its manifest as properties', () => {
    expect(hcx).toMatchObject({
      name: 'hcx'
    });
  });
});
