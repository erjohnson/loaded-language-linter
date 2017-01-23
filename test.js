const assert = require('assert');
const linter = require(__dirname + "/index.js");

describe('loaded-language-linter', function() {
  describe('#_isUrl', function() {
    it('should return true when given a valid url.', function() {
      let testUrl = 'https://www.google.com/'
      let result = linter._isUrl(testUrl)
      assert.equal(result, true)
    })

    it('should return false when given a string.', function() {
      let testString = 'Here is a string'
      let result = linter._isUrl(testString)
      assert.equal(result, false)
    })
  })
})
