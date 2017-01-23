const assert = require('assert');
const linter = require(__dirname + "/index.js");

describe('loaded-language-linter', function() {
  describe('#_getType', function() {
    it('should return 0 when given a valid url.', function() {
      let testUrl = 'https://www.google.com/'
      let result = linter._getType(testUrl)
      assert.equal(result, 0)
    })

    it('should return 1 when given a valid file.', function() {
      let testFile = __dirname + "/test.js"
      let result = linter._getType(testFile)
      assert.equal(result, 1)
    })

    it('should return 2 when given a string.', function() {
      let testString = 'Here is a string'
      let result = linter._getType(testString)
      assert.equal(result, 2)
    })
  })
})
