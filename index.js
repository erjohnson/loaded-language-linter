const fs = require('fs');
const textract = require('textract');
const validUrl = require('valid-url');
const terms = JSON.parse(fs.readFileSync(__dirname + "/terms.json", "utf8"))['all'];

function _isUrl(input) {
  if (validUrl.isUri(input)) {
    return true
  } else {
    return false
  }
}

function lint(input) {
  let text;
  let matches = [];

  switch (_isUrl(input)) {
    case true:
      textract.fromUrl(url, {preserveLineBreaks: true}, function(error, res) {
        text = res
      })
      break;
    case false:
      text = input
      break;
  }

  let lcText = text.toLowerCase()

  for (const term of terms) {
    if (lcText.indexOf(term) > -1) {
      matches.push(term);
    };
  };

  return {text: text, matches: matches};
}

module.exports = {
  _isUrl: _isUrl,
  lint: lint
}
