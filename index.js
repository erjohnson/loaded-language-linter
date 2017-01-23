const fs = require('fs');
const url = require('url');
const path = require('path');
const validUrl = require('valid-url');
const validFile = require('valid-file');
const terms = JSON.parse(fs.readFileSync(__dirname + "/terms.json", "utf8"))['all'];

function _getType(input) {
  if (validUrl.isUri(input)) {
    return 0
  } else if (validFile.sync(input)) {
    return 1
  } else {
    return 2
  }
}

module.exports = {
  _getType: _getType
}
