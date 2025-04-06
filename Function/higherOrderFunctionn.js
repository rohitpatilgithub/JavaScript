// Higher order functions ?
// Functions which perform either of the following
// 1. Functions which takes other functions as argument
// 2. Function that returns another function

console.log("Higher order function")

const radius = [3,8,5,6];

const diameter = (radius) => {
    return radius * 2;
}

const circumference = (radius) => {
    return 2 * Math.PI * radius;
}

const area = (radius) => {
    return Math.PI * radius * radius;
}

// functions return formulas
// we made a single function which accepts other functions as an argument
const calculate = (r,method) => {
    const output = [];
    for(let i = 0 ; i < radius.length ; i++){
        output.push(method(r[i]));
    }
    return output;
}

console.log(calculate(radius,area))

// .map() is also a higher order function
console.log(radius.map(area))


// This can be complicated so to make our work easy we have higher order function
// 1. Here everytime we decalre and call output which is an issue
// 2. Our logic ( formula ) part is only thing which that changes so we make efficient using higher order func
// Also it avoids the repetition

// function circumference(r){
//     let output = [];
//     for(let  i = 0 ; i < r.length ; i++){
//         output.push(2 * Math.PI * r[i]);
//     }
//     return output;
// }

// console.log("Hehe : "+circumference(radius));
