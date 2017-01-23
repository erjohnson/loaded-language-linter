const fs = require('fs');
const validUrl = require('valid-url');
const terms = JSON.parse(fs.readFileSync(__dirname + "/terms.json", "utf8"))['all'];

function _isUrl(input) {
  if (validUrl.isUri(input)) {
    return true
  } else {
    return false
  }
}

module.exports = {
  _isUrl: _isUrl
}
