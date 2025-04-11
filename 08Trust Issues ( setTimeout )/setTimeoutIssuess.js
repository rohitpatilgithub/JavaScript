// What do you think what will happen if timer in setTimeout is 0ms ?

console.log("Start");

// Even if we set timer to 0ms
// It will only execute when event loop finds call stack empty and callback function in callback queue
setTimeout(function cb(){
    console.log("Hehe fool I only execute after call stack is empty")
},0)

console.log("End")

// Expected Output :
// Start
// Hehe fool I only execute after call stack is empty
// End

// Actual Output :
// Start
// End
// Hehe fool I only execute after call stack is empty
