function capitalize(string) {
  if (string === "") {
    return "";
  }
  return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  divide: function (x, y) {
    return x / y;
  },
  multiply: function (x, y) {
    return x * y;
  },
};

function caesarCipher(string, shift) {
  const charCodes = [];
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const code = string.charCodeAt(i);
    if (char.match(/[a-z]/i)) {
      if (code >= 65 && code <= 90) {
        charCodes.push(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        charCodes.push(((code - 97 + shift) % 26) + 97);
      }
    } else {
      charCodes.push(code);
    }
  }
  return String.fromCharCode(...charCodes);
}

function analyzeArray(array) {
  return {
    average: array.reduce((total, curr) => total + curr, 0) / array.length,
    min: array.sort((a, b) => a - b)[0],
    max: array.sort((a, b) => b - a)[0],
    length: array.length,
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
