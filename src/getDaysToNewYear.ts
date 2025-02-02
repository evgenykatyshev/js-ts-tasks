/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  let nextNewYear: Date = new Date('2024-01-01');
  let newTargetDate: Date = new Date(targetDate);

  if (typeof targetDate === 'string') {
    let splitting: (string | undefined)[] = targetDate.split('.');

    if (splitting[0] !== undefined && splitting[1] !== undefined && splitting[2] !== undefined) {
      let targetDay: string = splitting[0];
      let targetMonth: string = splitting[1];
      let targetYear: string = splitting[2];
      newTargetDate = new Date(`${targetYear}-${targetMonth}-${targetDay}`);
    }
  } else if (typeof targetDate === 'object') {
    newTargetDate = targetDate;
  }

  let diffTime: number = Math.abs(nextNewYear.getTime() - newTargetDate.getTime());

  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};
