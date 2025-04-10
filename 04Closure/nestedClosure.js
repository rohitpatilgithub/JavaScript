// Nested Closure ?
function outest(){
    var a = 1;
    function outer(c){
        var b = 2;
        function inner(){
            console.log(a,b,c)
        }
        return inner;
    }
    return outer;
}

outest()(4)();

// We can do either call it this way
// var close = outest()(3);
// close();
