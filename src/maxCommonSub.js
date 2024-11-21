/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  let maxCommonSub = '';
  let maxCommonSubLength = 0;
  let maxCommonSubCandidate = '';
  let maxCommonSubCandidateLength = 0;
  let commonSubStr1Index;
  let commonSubStr2Index;

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if ( str1[i] === str2[j] ) {
        commonSubStr1Index = i;
        commonSubStr2Index = j;

        while ( str1[commonSubStr1Index] && str2[commonSubStr2Index] && ( str1[commonSubStr1Index] === str2[commonSubStr2Index] ) ) {
          maxCommonSubCandidate = `${maxCommonSubCandidate}${str1[commonSubStr1Index]}`;

          maxCommonSubCandidateLength++;

          commonSubStr1Index++;
          commonSubStr2Index++;
        }

        if (maxCommonSubCandidateLength > maxCommonSubLength) {
          maxCommonSub = maxCommonSubCandidate;
          maxCommonSubLength = maxCommonSubCandidateLength;
        }

        maxCommonSubCandidate = '';
        maxCommonSubCandidateLength = 0;

        j = commonSubStr2Index - 1;
      }
    }
  }

  return maxCommonSub;
};
