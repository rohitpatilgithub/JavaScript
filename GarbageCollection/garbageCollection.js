function x(){
    var a = 10;
    var b = 20;
    function y(){
        console.log(a)
        // here we are not utilizing ' b ' thus it is freezed,
        // use a debugger and try to log ' a ' and ' b '
    }
    return y;
}

x()();
