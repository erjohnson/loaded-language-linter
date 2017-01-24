import fs from 'fs';
import textract from 'textract';
import validUrl from 'valid-url';

module.exports = function (input) {

  const terms = JSON.parse(fs.readFileSync(__dirname + "/../terms.json", "utf8"))['all'];

  let text;
  let matches = [];

  if (validUrl.isUri(input)) {
    textract.fromUrl(input, {preserveLineBreaks: true}, function (error, res) {
      if (error) { console.log(error) }
      text = res;
    })
  } else {
    text = input;
  }

  let lcText = text.toLowerCase();

  for (const term of terms) {
    if (lcText.indexOf(term) > -1) {
      matches.push(term);
    }
  }

  return {text: text, matches: matches};
};
