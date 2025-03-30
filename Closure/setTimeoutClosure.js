// Using var try to log numbers from 1 to 5 ( after each second we should get a value )
// 1st second we log value : 1
// 2nd second we log value : 2....

function x(){
    for(var i = 1;i<=5;i++){
        t(i);
    }
    function t(y){
        setTimeout(function () {
            console.log(y);
        },y*1000)
    }
    console.log("This bitch will executed first")
}
x();

// We can use let too ...
// It is your task to find out how we can do it XD
