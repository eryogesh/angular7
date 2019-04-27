var x = 10;
console.log(x);
// Here x is 10
{ 
  let x = 2;
  console.log(x);
  // Here x is 2
  
}
{
    const x = 5;
  // Here x is 5
}
// Here x is 10


// Exponentiation Operator
var v = 5;
var z = v ** 2;          // result is 25



//Default Parameter Values
function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
  }
  myFunction(5); // will return 15




//Arrow Functions
// ES5
var z = function(x, y) {
    return x * y;
 }
 
 // ES6
 const p = (x, y) => x * y;



