const cart = ["books","pen","table lamp"];

api.createOrder(cart, function (){

    api.proceedToPayment( function (){

        api.showOrderSummary();

    })

})

// one callback inside another 
// one is dependent on another makes the callback hell

// this type of code is unmaintainable and unreadable

// here we lose our control on code which is called as ( Inversion of Control )
// here our payment method () is dependent and controlled by create order method ()
// thus there is a blind trust on callback function
