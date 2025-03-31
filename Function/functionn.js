// Anonymous function
// Function without name is called Anonymous function
// function (){

// }

// Function statement
function name(){
    console.log("This is general way to define a function");
    console.log("called as Statement function");
}

// Function expression
const okkies = function (){
    console.log("Declaring a function in a variable is called")
    console.log("Function expression")
}

// Function Declaration === Function Statement

// Difference between 'Function Statement and Function Expression'
// is 'HOISTING'
// 1. Statement function can be called before declaration
// 2. Expression function cannot do it because it has to go through temporal deadzone ( use let / const / var anything ) it will make sure it says it is not a function T_T

// Named Function
let fruit = function apple(){
    console.log("This is named function !!")
    console.log("This named function can't be accessed at global level and I'm talking about apple() -_- ")
}

// Parameters , Arguments and Functions
function a(param){
    return param;
}

function b() {
    return ("This is function being passed as an argument")
}

console.log(a(b()))  // here we get different output
console.log(a(()=>{console.log("Hemlo")}))  // here we get different output

// First Class Function
// Ability to use function as value to return a function or pass it as an argument
// Also called as 'FIRST CLASS CITIZENS'
