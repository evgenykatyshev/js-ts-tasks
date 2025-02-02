/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {number}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  const miToM: number = 1609.344;
  const poundToGr: number = 453.592;
  const CToK: number = 273.15;

  let result: number;

  switch (from) {
    case 'mi':
      if (to === 'm') {
        result = value * miToM;
      } else {
        throw new Error('Miles can be converted only to meters');
      }
      break;
    case 'm':
      if (to === 'mi') {
        result = value / miToM;
      } else {
        throw new Error('Miles can be converted only to meters');
      }
      break;
    case 'pound':
      if (to === 'gr') {
        result = value * poundToGr;
      } else {
        throw new Error('Pounds can be converted only to grams');
      }
      break;
    case 'gr':
      if (to === 'pound') {
        result = value / poundToGr;
      } else {
        throw new Error('Grams can be converted only to pounds');
      }
      break;
    case 'C':
      if (to === 'K') {
        result = CToK + value;
      } else {
        throw new Error('Celsius degrees can be converted only to Kelvins');
      }
      break;
    case 'K':
      if (to === 'C') {
        result = value - CToK;
      } else {
        throw new Error('Kelvins can be converted only to Celsius degrees');
      }
      break;
    default:
      result = value;
  }

  return parseFloat(result.toFixed(2));
};
