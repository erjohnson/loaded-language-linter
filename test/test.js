import assert from 'assert';
var linter = require(__dirname + "/../src/index.js");

describe('loaded-language-linter', () => {
  describe('#default', () => {
    it('should return 0 matches when no terms are present.', () => {
      let testString = 'Lorem ipsum dolor sit amet'
      let result = linter(testString)
      assert.equal(0, result.matches.length)
    })

    it('should ignore capitalization.', () => {
      let testString = 'That person is a Socialist.';
      let result = linter(testString)
      assert.equal("socialist", result.matches[0])
      assert.equal(1, result.matches.length)
    })

    it('should work with multi word phrases', () => {
      let testString = 'They are a member of the ruling class.'
      let result = linter(testString)
      assert.equal('ruling class', result.matches[0])
      assert.equal(1, result.matches.length)
    })

    it('should not have duplicate matches', () => {
      let testString = 'The ruling class. The ruling class'
      let result = linter(testString)
      assert.equal('ruling class', result.matches[0])
      assert.equal(1, result.matches.length)
    })

    it('should return formatted text along with matches', () => {
      let testString = 'That person is a Socialist.';
      let result = linter(testString)
      assert.equal("socialist", result.matches[0])
      assert.equal(1, result.matches.length)
      assert.equal(testString, result.text)
    })
  })
})
