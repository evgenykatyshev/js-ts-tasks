/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {

  let diffArr = [arr[0]];
  let isDifferent = true;
  let diffElemsNumber = 1;

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < diffElemsNumber; j++) {

      if ( diffArr[j] === arr[i] ) {
        isDifferent = false;
        break;
      }

    }

    if(isDifferent) {
      diffArr.push( arr[i] );
      diffElemsNumber++;
    }

    isDifferent = true;

  }

  return diffElemsNumber;

  //return new Set(arr).size; // Solution from the practical class
};