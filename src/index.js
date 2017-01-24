import fs from 'fs'

module.exports = function (input) {

  const terms = JSON.parse(fs.readFileSync(__dirname + "/../terms.json", "utf8"))['all'];

  let text = input;
  let lowerCaseText = input.toLowerCase();
  let matches = [];

  for (const term of terms) {
    if (lowerCaseText.indexOf(term) > -1) {
      matches.push(term);
    }
  }

  return {text: text, matches: matches};
};
