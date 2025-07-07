/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const daylyRentSum = 40;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  return days === 1 || days === 2
    ? days * daylyRentSum
    : days >= 7
      ? days * daylyRentSum - shortTermDiscount
      : days * daylyRentSum - longTermDiscount;
}

module.exports = calculateRentalCost;
