/* eslint-env node */
const numOnly = require('./num-only').default;

module.exports = numOnly;

// Allow use of default import with ES module syntax
module.exports.default = numOnly;
