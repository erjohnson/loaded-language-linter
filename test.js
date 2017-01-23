const assert = require('assert');
const linter = require(__dirname + "/index.js");

describe('loaded-language-linter', function() {
  describe('#_isUrl', function() {
    it('should return true when given a valid url.', function() {
      let testUrl = 'https://www.google.com/'
      let result = linter._isUrl(testUrl)
      assert.equal(true, result)
    })

    it('should return false when given a string.', function() {
      let testString = 'Here is a string'
      let result = linter._isUrl(testString)
      assert.equal(false, result)
    })
  })

  describe('#lint', function() {
    it('should return 0 matches when no terms are present.', function() {
      let testString = 'Lorem ipsum dolor sit amet'
      let result = linter.lint(testString)
      assert.equal(0, result.length)
    })

    it('should ignore capitalization.', function() {
      let testString = 'That person is a Socialist.';
      let result = linter.lint(testString);
      assert.equal("socialist", result[0])
      assert.equal(1, result.length);
    });

    it('should work with multi word phrases', function() {
      let testString = 'They are a member of the ruling class.'
      let result = linter.lint(testString);
      assert.equal('ruling class', result[0])
      assert.equal(1, result.length);
    });

    it('should not have duplicate matches', function() {
      let testString = 'The ruling class. The ruling class'
      let result = linter.lint(testString);
      assert.equal('ruling class', result[0])
      assert.equal(1, result.length);
    });
  })
})
