[1]: https://en.wikipedia.org/wiki/Loaded_language
[2]: https://en.wikipedia.org/wiki/Eric_Weinstein
[3]: https://www.edge.org/response-detail/27181
[4]: https://en.wikipedia.org/wiki/Emotive_conjugation

# loaded-language-linter

A small Node.JS library to detect [loaded language][1] in given text.

## Install

```bash
npm i loaded-language-linter
```

## Usage

```js
// require the module
var linter = require('loaded-language-linter');

var result = linter('Lorem ipsum dolor sit amet family values.');

console.log(result.text)
// returns original text
// 'Lorem ipsum dolor sit amet family values.'

console.log(result.matches)
// returns Array of matches
// [ 'family values' ]
```

## About

This project was inspired by [Eric Weinstein's][2] response to:

> ["What scientific term or concept ought to be more widely known?"][3]

[Russell conjugation (emotive conjugation)][4].
