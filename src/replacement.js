/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  let reminder;

  for (var i = 0, len = arr.length; i < len; i++) {
    reminder = Math.abs(arr[i]) % 10000;

    if (reminder > 999) {
      arr[i] = 4;
    } else if (reminder > 99) {
      arr[i] = 3;
    } else if (reminder > 9) {
      arr[i] = 2;
    } else {
      arr[i] = 1;
    }
  }

  return arr;
};
