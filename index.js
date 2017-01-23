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
      textract.fromUrl(url, function( error, res ) {
        text = res.toLowerCase()
      })
      break;
    case false:
      text = input.toLowerCase()
      break;
  }

  for (const term of terms) {
    if (text.indexOf(term) > -1) {
      matches.push(term);
    };
  };

  return matches;
}

module.exports = {
  _isUrl: _isUrl,
  lint: lint
}
