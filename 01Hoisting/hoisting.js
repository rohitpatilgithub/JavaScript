// Hoisting is a concept which enables us to extract values of variables and functions even before initialising/assigning value without getting error and this is happening due to the 1st phase (memory creation phase) of the Execution Context.
getName(); // Namaste JavaScript
// console.log(x); // Uncaught Reference: x is not defined.
console.log(getName); // f getName(){ console.log("Namaste JavaScript); }
function getName() {
  console.log("Namaste JavaScript");
}

getAge(); // getAge is not a function
console.log(getAge);
var getAge = () => {
  console.log("Age is just a number")
}

//Hosting is all about Execution Context