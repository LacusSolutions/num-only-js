# num-only

![NPM Latest Version](https://img.shields.io/npm/v/num-only)
![Bundle Size](https://img.shields.io/bundlephobia/min/num-only?label=bundle%20size)
![Downloads Count](https://img.shields.io/npm/dm/num-only.svg)
![Test Status](https://img.shields.io/github/actions/workflow/status/juliolmuller/num-only-js/release.yml?label=tests)
![Last Update Date](https://img.shields.io/github/last-commit/juliolmuller/num-only-js)
![Project License](https://img.shields.io/github/license/juliolmuller/num-only-js)

Node package with a function to stringify and remove non-numeric characters of items.

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

## Installation

```bash
# using NPM
$ npm install num-only

# using Bun
$ bun add num-only
```

## Import

```js
// ES Modules
import numOnly from 'num-only'

// Common JS
const numOnly = require('num-only')
```

or import it through your HTML file, using CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/num-only@latest/dist/num-only.min.js"></script>
```

## Usage

```js
numOnly('12345')                  // returns '12345'
numOnly('abc123')                 // returns '123'
numOnly(['a', 'b', 'c', 1, 2, 3]) // returns '123'
numOnly(true)                     // returns ''
numOnly(() => 5 + 3)              // returns '53'
```
