// Consumer Promise Practice
// Task : Create a promise to print the name of all users

// Both blocks are consumers because we have not created a promise using constructor

API = fetch('https://jsonplaceholder.typicode.com/users')

API
    .then((res) => res.json())
    .then((users) => users.forEach((element,index) => console.log(index+1+" : "+element.name) ))
    .catch((err) => console.log("Error aaya",err))


// Why have I commented below block of promise
// When we are fetching an API and either it is resolved / rejected
// During this process we cannot re - trigger / re - create .then()

// function callAPI(url){
//     return url;
// }

// callAPI(API)
//     .then((res) => res.json())
//     .then((re) => re.forEach((element,index) => console.log( (index + 1) + " : " + element.name )))
