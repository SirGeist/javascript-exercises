let isalnum = (char) => {
  return /^[0-9a-zA-Z]+$/.test(char);
};

const palindromes = function (word) {
  let left = 0;
  let right = word.length - 1;

  while (left <= right) {
    while (!isalnum(word[left])) {
      left++;
    }
    while (!isalnum(word[right])) {
      right--;
    }

    if (word[left].toLowerCase() != word[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
