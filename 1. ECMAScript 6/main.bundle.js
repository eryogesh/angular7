"use strict";

var x = 10;
console.log(x);
// Here x is 10
{
  var _x = 2;
  console.log(_x);
  // Here x is 2
}
{
  var _x2 = 5;
  // Here x is 5
}
// Here x is 10


// Exponentiation Operator
var v = 5;
var z = v ** 2; // result is 25


//Default Parameter Values
function myFunction(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  // y is 10 if not passed or undefined
  return x + y;
}
myFunction(5); // will return 15


//Arrow Functions
// ES5
var z = function z(x, y) {
  return x * y;
};

// ES6
var p = function p(x, y) {
  return x * y;
};
