console.log("start");
setTimeout(function cbT(){
    console.log("Fast but less priority T_T")
},1000);
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
console.log("end");

// Output : start
//          end
//          Fast or Slow doesn't matter , I am prioritized
//          Fast but less priority T_T


// For Promises and Mutation Observer we have separate queue called ' Microtask queue '

// Our event loop prioritizes microtask queue than callback queue
// But in some cases if our callback is ready and sees that event loop can move the callback from queue to call stack then
// It may happen our callback queue is executed first because our microtask queue can be pending
// or
// Callback queue executed when microtask queue is empty

// Starvation of callback queue
// When our Microtask queue keeps executing continuously without being empty
// the Callback Queue gets delayed for a long time and may not execute at all
