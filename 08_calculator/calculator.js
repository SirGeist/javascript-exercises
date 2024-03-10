const add = function (varA, varB) {
  return varA + varB;
};

const subtract = function (varA, varB) {
  return varA - varB;
};

const sum = function (arr) {
  return arr.reduce((total, item) => (total += item), 0);
};

const multiply = function (arr) {
  return arr.reduce((total, num) => (total *= num), 1);
};

const power = function (varA, varB) {
  return varA ** varB;
};

const factorial = function (num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
