const add = function(a,b) {
	return a + b;
};


const subtract = function(c, d) {
	return c - d;
};

const sum = function(arr) {
  const result = 0;
	const sumAll = arr.reduce((a, b) => a + b, result)
  return sumAll;
};


const multiply = function(arr) {
  let result = 1;
	const multAll = arr.reduce((a, b) => a * b, result)
  return multAll;
};


const power = function(a, b) {
  return a ** b;
};


const factorial = function(fact) {
  let result = 1;
	for (let i = 1; i <= fact; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
