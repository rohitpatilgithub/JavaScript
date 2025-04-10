// Callback function
// Function b is 'Callback function here' because we are passing it as argument
function a(param){
    return param();
}
function b(){
    console.log("Called function b HEHE")
}
a(b);
// a(b()) // we are not practically using callback function ( if we use return param; )

// Another Example of callback function
// Here our anonymous function is our callback function
setTimeout(()=>{
    console.log("BASTARD CALLBACK PRINTED AFTER 1 SEC")
},1000)

// Here in Js callstack everything is executed through main thread
// Sometimes heavy operations can block our main thread
// So using asynchronous methods can help us deal with the issue
// Example: setTimeout() schedules a function to execute after a specified delay of 1000ms in our case
// Go through setTimeout example

// EventListener ?
// EventListener also uses callback function
// "When an event occurs, the callback function is added to the Call Stack and executed."
// Here our anonymous function is the callback function
// document.getElementById('clicked').addEventListener("click",()=>{
//      console.log("Button clicked")
// })

// EventListener & Closure used together
// Count number of clicks on button

// Closure(attachement) will be present in our Memory because it retains 'count'
function attachment(){
    let count = 0;// we could declare this globally but we are following encapsulation
    document.getElementById('clicked').addEventListener("click",()=>{
        console.log("Button clicked : ",++count)
    })
}
attachment();

// Most importantly ,
// If you go in Event Listeners ( JS engine )
// Our 'Event Handler' will handle our callback function with 2 scopes
// 1. Global scope : ( lexical scope cuz it is parent obviously )
// 2. Closure ( attachment ) : which will perform operations with 'count'

// About Garbage Collection & Event Listeners
// Event Listeners can consume a lot of memory, especially when attached to many elements.
// If not removed properly, they can lead to memory leaks and slow down performance.
// Therefore, it is recommended to remove Event Listeners when they are no longer needed,
// allowing garbage collection to free up memory.
