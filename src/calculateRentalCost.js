/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const daylyRentSum = 40;

  return days === 1 || days === 2
    ? days * daylyRentSum
    : days >= 7
      ? days * daylyRentSum - 50
      : days * daylyRentSum - 20;
}

module.exports = calculateRentalCost;
