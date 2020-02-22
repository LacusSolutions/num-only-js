/**
 * Removes any non-numeric character from a string chaing
 *
 * @param {string} target
 * @returns {string}
 */
module.exports = function(target) {

  const targetString = target.toString()

  return targetString.replace(/\D/g, '')
}
