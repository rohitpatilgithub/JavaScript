// Event Loop with Event Listener

console.log("start");
document.getElementById("clicked").addEventListener("click",function ab(){
    console.log("Clicked")
})
console.log("end")

// Output : start
//          end
//          Clicked (only after click event occurs)

// So Event Loop works similar here and the trigger point which was timer for setTimeout
// To call the callback function
// Now the event is our trigger point , it can be 'click' , 'scroll' , etc..

// "The addEventListener registers the event and its associated callback function in the Web API environment.
// However, the function does not immediately go to the Callback Queue. It only does so when the event (e.g., 'click') occurs.
// When the event ('click') occurs, the browser moves the callback function to the Callback Queue
// Then event loop moves the callback to call stack for 
// further execution process when call stack is empty

// How addEventListener works ?
// so when our Js file encounters with addEventListener , it registers the event handler in web API environment
// which contains both callback function and event
// where our Web API monitors the event continuously so when event occurs , it moves the callback function to callback queue

// What if there are multiple events ?
// It will work the same way !!!
// Only extra thing is that our queue will be executed in FIFO
// Also the callback functions will be ordered one after another in a queue
// Event Loop moves each callback from the queue to the Call Stack (only when callstack is empty), 
// ensuring that they execute in the order they were added
// 1st click -> into the callback queue
// 2nd click -> into the callback queue

// 1st executed
// 2nd executed

// Note : This process is usually fast, but if many events occur rapidly, they will be queued and processed one by one.
