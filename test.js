var assert = require('assert')
const fn = require('.')

describe('The test works', () => {
  it('expects nothing to be output', () => {
    const res = fn()
    assert.strictEqual(res, undefined)
  })
})
