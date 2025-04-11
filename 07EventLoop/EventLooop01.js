// Event Loop with setTimeout

console.log("start");
setTimeout(function cb(){
    console.log("Print after 1 sec");
},1000)
console.log("end");

// Output : start
//          end
//          Print after 5 sec

// So how our execution is done here
// 1. we log ' start ' at line no 1
// 2. when setTimeout is called , timer is registered at web API environments section
// 3. we log ' end ' at line no 5
// 4. we haven't called out callback function cb() where does it goes

// Where did setTimeout go ?
// As we know our setTimeout is registered at web API environments
// The timer is given the time to do the count down , In our case it is 5000ms
// As soon as our timer expires our callback function cb() goes to 'Callback queue'
// This 'callback queue' is monitered by event loop

// So why it is monitered by event loop , what is it ?
// Event loop is mechanism which continuously checks whether our Call stack is empty and moves pending callbacks to call stack
// And it has a task to do which is to push our callback function from callback queue to call stack
// And it only pushes into call stack when our call stack is empty in current state

// IN OUR CASE
// Call stack is found empty after we log ' end ' at line no 5
// Thus even if our setTimeout finishes fast it has to wait until the call stack is emptied
