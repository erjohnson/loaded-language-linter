# loaded-language-linter

A small Node.JS library to detect [loaded language](https://en.wikipedia.org/wiki/Loaded_language) in text or a given url.

## Install

```bash
npm i loaded-language-linter
```

## Usage

```js
// import the module
const linter = require('loaded-language-linter');

linter.lint('Lorem ipsum dolor sit amet')

// or

linter.lint('https://www.somewebpage.com/article')
```
