# LacusSoft :: num-only

![NPM Latest Version](https://img.shields.io/npm/v/@lacussoft/num-only)
![Downloads Count](https://img.shields.io/npm/dm/@lacussoft/num-only.svg)
![Bundle Size](https://packagephobia.now.sh/badge?p=@lacussoft/num-only)
![Test Status](https://img.shields.io/travis/juliolmuller/num-only-js/master.svg)
![Last Update Date](https://img.shields.io/github/last-commit/juliolmuller/num-only-js)
![Project License](https://img.shields.io/github/license/juliolmuller/num-only-js)

Node package with a function to stringify and remove non-numeric characters of items.

## Installation

```bash
$ npm install @lacussoft/num-only
```

## Import

```js
// ES Modules
import numOnly from '@lacussoft/num-only'

// Common JS
const numOnly = require('@lacussoft/num-only').default
```

or import it through your HTML file, using CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@lacussoft/num-only@latest/dist/num-only.min.js"></script>
```

## Usage

```js
numOnly('12345')                  // returns '12345'
numOnly('abc123')                 // returns '123'
numOnly(['a', 'b', 'c', 1, 2, 3]) // returns '123'
numOnly(true)                     // returns ''
numOnly(() => 5 + 3)              // returns '53'
```
