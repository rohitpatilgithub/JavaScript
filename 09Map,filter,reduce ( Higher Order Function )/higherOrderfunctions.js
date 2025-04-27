// Higher order function
// 1. Function which accepts another function as an argument
// ex: function a(param){  // function a() is higher order function
//        param();
// }
//                         OR
// 2. Function which return another function as result
// ex: function b(p){  // function b() is higher order function
//        return p();
// }

// map is a higher order function
// map() is a higher-order array method that creates a new array by applying a function to each element of the original array.

const a = [2,4,10,1];

function double(x){
    return x * 2; // return the array by making 2 x original values
}

function triple(x){
    return x * 3; // return the array by making 3 x original values
}

function binary(x){
    return x.toString(2); // return the array by converting elements into binary
}

const output = a.map(binary)
console.log(output)

// filter is higher order function
// filter() is a higher-order array method that creates a new array containing only the elements that satisfy a given condition.

const b = [
    { name : "Rohit" , surname : "P" , age : 20 },
    { name : "Sumit" , surname : "M" , age : 23 },
    { name : "Shrikant" , surname : "K" , age : 20 },
]

function ageIs(z){
    return z.age < 21; // return only those key value pairs which have age less than 21
}

const outcome = b.filter(ageIs);
console.log(outcome)

// reduce is higher order function
// reduce() is a higher-order array method that processes each element in the array to accumulate a single final result, 
// using a callback and an optional initial value.

// In simple words 
// reduce() has accumulator and current parameters
// accumulator : stores the values after condition is satisfied
// current : while we are travesing the array / anything , it will go through every single element and
// thus current is current element it is on while traversing

// Note : We must provide our accumulator a default value

const c = [
    { name : "Rohit" , surname : "P" , age : 20 },
    { name : "Sumit" , surname : "M" , age : 23 },
    { name : "Shrikant" , surname : "K" , age : 20 },
]

function ageMore(acc,z){
    if(z.age == 20){
        acc.push(z.name);
    }
    return acc;
}

const final = c.reduce(ageMore,[]); // Note : We are also providing acc a default value
console.log(final)

// We can do either ways also

// const final = c.reduce((acc,z) => {
//     if(z.age < 23) {
//         acc.push(z.name)
//     }; 
//     return acc;
// },[]);
// console.log(final)
