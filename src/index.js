import fs from 'fs'

module.exports = function (input) {

  const terms = JSON.parse(fs.readFileSync(__dirname + "/../terms.json", "utf8"))['all'];

  let regex = /[.,\/#!$%\^&\*;:{}=\_`~()]/g
  let stripText = input.toLowerCase().replace(regex,' ');
  let matchArray = [];

  for (const term of terms) {
    let toMatch = ' ' + term + ' ';
    if (stripText.includes(toMatch)) {
      matchArray.push(term);
    }
  };

  return {text: input, matches: matchArray};
};
