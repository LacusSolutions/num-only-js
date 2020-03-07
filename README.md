# LacusSoft :: num-only

[![npm version](https://img.shields.io/npm/v/@lacussoft/num-only.svg?style=flat-square)](https://www.npmjs.org/package/@lacussoft/num-only)
[![install size](https://packagephobia.now.sh/badge?p=@lacussoft/num-only)](https://packagephobia.now.sh/result?p=@lacussoft/num-only)
[![npm downloads](https://img.shields.io/npm/dm/@lacussoft/num-only.svg?style=flat-square)](http://npm-stat.com/charts.html?package=@lacussoft/num-only)
[![build status](https://img.shields.io/travis/lacussoft/num-only/master.svg?style=flat-square)](https://travis-ci.org/lacussoft/num-only)

Node package with a function to stringify and remove non-numeric characters of items.

### Installation:

```bash
$ npm install @lacussoft/num-only
```

### Import:

```js
// ES6+ notation
import numOnly from '@lacussoft/num-only'

// Common JS
const numOnly = require('@lacussoft/num-only')
```

or import it through your HTML file, using CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@lacussoft/num-only@latest/dist/num-only.min.js"></script>
```

### Usage:

```js
numOnly('12345')                  // returns '12345'
numOnly('abc123')                 // returns '123'
numOnly(['a', 'b', 'c', 1, 2, 3]) // returns '123'
numOnly(true)                     // returns ''
numOnly(() => 5 + 3)              // returns '53'
```
