/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  let stringToPaste = '';

  if ( symbolsCount > str.length ) {
    return str;
  } else {
    for (let i = str.length - 1; i >= ( str.length - symbolsCount ); i--) {
      stringToPaste = str[i] + stringToPaste;
    }
    return stringToPaste + str + stringToPaste;
  }
};