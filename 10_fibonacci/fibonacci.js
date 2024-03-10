// Using memoization to reduce the amount of repeat information
// when recursively adding the numbers
const fibonacci = function (position, memo = {}) {
  // Error handling
  if (position < 0) {
    return "OOPS";
  }

  // If we receive string input, turn to int
  position = parseInt(position);
  if (position <= 1) {
    return position;
  }

  if (!memo[position]) {
    return fibonacci(position - 1, memo) + fibonacci(position - 2, memo);
  }

  return memo[position];
};

// Do not edit below this line
module.exports = fibonacci;
