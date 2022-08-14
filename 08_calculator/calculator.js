const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  let total = 0;

  for(const num of array){
    total += num;
  }

  return total;
};

const multiply = function(array) {
  let total = 1;
  for(const nums of array){
    total *= nums;
  }

  return total;
};

const power = function(base, power) {
  return base**power
	
};

const factorial = function(fact) {
  let total = 1;
  for(i=1; i<= fact; i++){
    total *= i
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
  factorial
};
