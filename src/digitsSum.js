/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  let tenExtent = 10;
  let sum = 0;
  let absN = Math.abs(n);

  while (tenExtent / 10 <= absN) {
    sum += ( absN % tenExtent - absN % (tenExtent / 10) ) / tenExtent * 10;
    tenExtent *= 10;
  }

  return sum;
};
