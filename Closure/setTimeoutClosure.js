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
