/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
module.exports.pangram = function (word: string | number): any {
  let isPangram: any = false;
  let arr: Array<string> = [];

  const allLetters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const allDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (typeof word === 'string') {
    arr = [
      ...new Set(
        word
          .toLowerCase()
          .replace(/[^a-z]/g, '')
          .split('')
      ),
    ].sort();
    isPangram = JSON.stringify(arr) === JSON.stringify(allLetters);
  }

  if (typeof word === 'number') {
    arr = [...new Set(word.toString().split(''))].sort();
    isPangram = JSON.stringify(arr) === JSON.stringify(allDigits);
  }

  return isPangram;
};
