const add = function(a, b) {
	return result = a + b;
};

const subtract = function(a, b) {
	return result = a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, curr) => 
    acc + curr, 0
  )
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => 
    acc * curr
  )
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
  let j = 1
  for(i = n; i > 0; i--){
    j *= i;
  }
  return j
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
