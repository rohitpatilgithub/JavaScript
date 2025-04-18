console.log("Hello world")

// Promise ?
// Promise is an object that represents eventual completion / rejection of the asynchronous function
// Async operation will be eventually completed / rejected

// Promise object resolves 2 major problems
// 1. Callback Hell 
// 2. Inversion of control

// We retain control by .then()
// unlike this where we have no control for our inner functions we just take the control using .then()
// const cart = ["books","pen","table lamp"];

// api.createOrder(cart, function (){
//     api.proceedToPayment( function (){
//         api.showOrderSummary();
//     })
// })

// ' user ' here is a promise object
const user = fetch('https://api.github.com/users/rohitpatilgithub')

console.log(user)

// here we try to get response data from the ' user ' object
user
    .then((response) => console.log(response))
    .then((result) => console.log(result))

// we can write like this also !!!
user
    .then(function (data){
        return data;
    })
    .then(function (obj){
        return obj;
    })

// The data inside a Promise is initially 'undefined' or not yet available.
// The Promise is in a 'pending' state at first.
// We attach functions to the Promise using .then(), .catch(), or .finally().
// These functions will only run once the Promise is resolved (fulfilled) or rejected.
// When the Promise is resolved, it contains the actual data, and the .then() callback gets executed.

// Properties of Promises:

// 1. Promise State:
//   'pending'   : The initial state, before the Promise is settled.
//   'fulfilled' : The operation completed successfully.
//   'rejected'  : The operation failed.

// 2. Promise Result:
//    'pending'  : result is undefined.
//    'fulfilled': result holds the resolved value (data).
//    'rejected' : result holds the error reason.
