const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./functions");

// Capitalize tests
test("capitalizes the first character of a string", () => {
  expect(capitalize("luke")).toBe("Luke");
});
test("capitalizes a single character", () => {
  expect(capitalize("a")).toBe("A");
});
test("works with empty string", () => {
  expect(capitalize("")).toBe("");
});
test("does not modify already capitalized string", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

// Reverse string tests
test("reverses string", () => {
  expect(reverseString("luke")).toBe("ekul");
});

test("reverses single character", () => {
  expect(reverseString("z")).toBe("z");
});

test("works with empty string", () => {
  expect(reverseString("")).toBe("");
});

test("reverses a string with punctuation", () => {
  expect(reverseString("Cool!")).toBe("!looC");
});

// Calculation tests
test("returns correct addition", () => {
  expect(calculator.add(2, 4)).toBe(6);
});

test("returns correct subtraction", () => {
  expect(calculator.subtract(2, 4)).toBe(-2);
});

test("returns correct multiplication", () => {
  expect(calculator.multiply(2, 4)).toBe(8);
});

test("returns correct division", () => {
  expect(calculator.divide(8, 4)).toBe(2);
});

// Caesar cipher tests
test("shifts each character by the shift factor", () => {
  expect(caesarCipher("hello world", 3)).toBe("khoor zruog");
});

test("wraps from z to a", () => {
  expect(caesarCipher("z", 1)).toBe("a");
});

test("keeps the same case", () => {
  expect(caesarCipher("Hello world", 3)).toBe("Khoor zruog");
});

test("handles punctuation", () => {
  expect(caesarCipher("hello world!", 3)).toBe("khoor zruog!");
});

// Analyze array test
test("finds the average, min, max, and length of array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("finds the average, min, max, and length of array with negative numbers", () => {
  expect(analyzeArray([-1, 0, 1])).toEqual({
    average: 0,
    min: -1,
    max: 1,
    length: 3,
  });
});

test("finds with empty array", () => {
  expect(analyzeArray([])).toEqual({
    average: NaN,
    min: undefined,
    max: undefined,
    length: 0,
  });
});
