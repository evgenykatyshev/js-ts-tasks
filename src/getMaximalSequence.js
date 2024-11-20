/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {

  let maximalSequence = [arr[0]];
  let maximalSequenceCandidate = [arr[0]];

  for (let i = 1; i < arr.length; i++) {

    if (arr[i] === arr[i - 1]) {
      maximalSequenceCandidate.push(arr[i]);
    } else {
      maximalSequenceCandidate = [arr[i]];
    }

    if (maximalSequenceCandidate.length > maximalSequence.length) {
      maximalSequence = [...maximalSequenceCandidate];
    }

  }

  return maximalSequence;
};
