const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let total = 0;
  for(let i in arr){
    total += arr[i];
  }
  return total;
};

const multiply = function(arr) {
  let total = 1;
  for(let i in arr){
    total *= arr[i];
  }
  return total;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if(num === 0 || num === 1){
    return 1;
  }
  let fact = 1;
  for(let i = 2; i <= num; i++){
    fact *= i;
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
