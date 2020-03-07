/**
 * Removes any non-numeric character from a string chaing
 *
 * @param {string} target
 * @returns {string} - Target string you want to clear from NaN characters
 */
module.exports = function(target) {

  return String(target).replace(/\D/g, '')
}
