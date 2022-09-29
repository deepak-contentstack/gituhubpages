/**
 * Checks if next month is disabled
 * @param {Date} date - The current date
 * @param {Date} maxMonth- max allowed month
 * @returns {boolean}
 */
declare const isNextMonthDisabled: (date: Date, maxMonth: Date) => boolean;
/**
 * Checks if prev month is disabled
 * @param {Date} date - The current date
 * @param {Date} minMonth- max allowed month
 * @returns {boolean}
 */
declare const isPrevMonthDisabled: (date: Date, minMonth: Date) => boolean;
export { isNextMonthDisabled, isPrevMonthDisabled };
