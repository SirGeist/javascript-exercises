const reverseString = function (phrase) {
  let answer = "";
  for (let i = phrase.length - 1; i >= 0; i--) {
    answer += phrase[i];
  }
  return answer;
};

// Do not edit below this line
module.exports = reverseString;
