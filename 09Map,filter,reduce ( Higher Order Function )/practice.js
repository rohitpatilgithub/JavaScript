// Some exercise for parcticing map , filter and reduce

const data = [
    { name : "Rohit", surname : "P" , age : 20 },
    { name : "Sagar", surname : "L" , age : 20 },
    { name : "Rohan", surname : "P" , age : 16 },
    { name : "Shikant", surname : "K" , age : 21 },
    { name : "Harsh", surname : "R" , age : 23 },
]


// Q1. Use map function to get full name of users
const output = data.map((x) => x.name + " " + x.surname);
console.log(output)


// Q2. Use reduce function to find age of people and let the user know how many times the age has repeated in list
// Ex : { 20 : 1 , 24 : 3 , 19 : 1 }
const outcome = data.reduce((acc,z) => {
    if(acc[z.age]){
        acc[z.age] = acc[z.age]++;
    }
    else{
        acc[z.age] = 1;
    }
    return acc;
},{})

console.log(outcome)

// Q3. Use reduce function to find name of people with age less than 21
const execute = data.reduce((acc,z) => {
    if(z.age < 21){
        acc.push(z.name);
    }
    return acc;
},[])
console.log(execute)
