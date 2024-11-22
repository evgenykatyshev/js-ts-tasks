/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  return function(lowLimit, highLimit) {

    let allNumbersWithinLimits = [];

    let k = 2;

    for (let i = lowLimit; i <= highLimit; i++) {
      allNumbersWithinLimits.push(i);
    }

    for (let p = 2; p < highLimit; p++) {
      k = 2;
      while ( p * k <= highLimit ) {
        for (let j = 0; j < allNumbersWithinLimits.length; j++) {
          if (allNumbersWithinLimits[j] % ( p * k ) === 0 ) {
            allNumbersWithinLimits.splice(j, 1);
          }
        }
        k++;
      }
    }

    return allNumbersWithinLimits;
  }
};
