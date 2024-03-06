const sumAll = function (num1, num2) {
  let sum = 0;

  // If num1 is greater than num2,
  // perform a swap
  if (num1 > num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }

  // Checks whether num1 or num2 are not ints or negatives
  if (
    typeof sum != typeof num1 ||
    typeof sum != typeof num2 ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }

  // Use the two given values to add up for the sum
  for (let i = num1; i <= num2; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
