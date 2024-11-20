/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {

  let arrayWith100 = [];

  for (let element of arr) {
    arrayWith100.push(element);

    if (element % 2 !== 0) {
      arrayWith100.push(100);
    }
  }

  return arrayWith100;
};
