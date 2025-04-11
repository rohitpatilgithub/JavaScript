// There are trust issues with setTimeout
// Callback function from setTimeout is only excuted when event loop finds
// 1. Callback function is callback queue or microtask queue
// 2. Call stack must be empty

console.log("Start")

setTimeout(function cb(){
    console.log("Beech waited for 10 seconds seriously")
},5000);

console.log("End T_T");


// Below block of code will hold our thread for 10 seconds
// How ?
const startTime = new Date().getTime(); // current time in ms
let endTime = 0; // 0
while(endTime < startTime + 10000){ // if our endTime is 10s more that current time it exits our while loop 
    endTime = new Date().getTime();
}

console.log("Ended The 10 seconds") // after this log, our call stack gets emptied

// Expected Output is : 
// Start
// End
// Beech waited for 10 seconds seriously
// Ended The 10 seconds

// But we get
// Start
// End
// Ended The 10 seconds
// Beech waited for 10 seconds seriously

// This happened because our main thread was blocked by our while loop
// call stack was not empty
// thus callback cb () from callback queue will remain until it event loop moves the cb() to call stack

// Thus even our 5 seconds done and timer has been expired we don't get our expected outcome
