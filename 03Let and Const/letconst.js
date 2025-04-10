// Are let and const hoisted ?
// These are in the temporal deadzone for time being

// var is in global and let is in different memory space 'script'
let a = 10;
var b = 20;

// thus when we try to access a beforehand instead of 'undefined' it provides us with 'Ref error : Cannot access before initialization'
// same goes with const
// 'C' is in temporal dead zone until it is initialized a value , it cannot be accessed
console.log(c)
let c = 10;

// Syntax error ?
// If we have duplicate declaration of 'let' / 'const'

let z = 10;
// let z = 10;// error

// not applicable cuz 'var' is different ( stored in global execution context )
var j = 5;
var j = 50;

// Type error ?
// If we try to re-assign the 'const'
const gg = 1000;
gg = 1;
console.log(gg)
