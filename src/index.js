/**
 * Removes any non-numeric character from a string chaing
 *
 * @param {string} target
 * @returns {string}
 * @throws {TypeError}
 */
module.exports = function(target) {

  return String(target).replace(/\D/g, '')
}
