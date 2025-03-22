// Closure is combination of functions and its lexical environments
function x(){
    var a = 25;
    function y(){
        console.log(a)
    }
    a = 7;
    return y;
}
var z = x();    // here x() returns function y() which is stored in var z
console.log(z)  // we get y()
// Note: The variable 'a' is inside the closure of 'y()', so 'a' remains accessible.
// Most importantly, 'a' is not garbage collected because 'y()' still holds a reference to it.
z();