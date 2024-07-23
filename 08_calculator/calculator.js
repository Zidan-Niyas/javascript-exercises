const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
  for(let i=0; i<arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  for(let i=0; i<arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

const power = function(num, pow) {
  let ans = 1;
	while(pow) {
    ans = ans * num;
    pow--;
  }
  return ans;
};

const factorial = function(num) {
  let fact = 1;
	while(num) {
    fact = fact * num;
    num--;
  }
  return fact;
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
