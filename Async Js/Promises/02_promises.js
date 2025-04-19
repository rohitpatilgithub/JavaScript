const cart = ["book","pen","pencil"]

// Consumer : Reacts to the result
// const promise = createOrder();
// promise.then(()=> console.log('Success'))
// .catch(()=> console.log("Error cart not found"))

// alternate way to write promise
createOrder(cart)
.then(function() { return cart })
// if this .then() fails then the consumer will throw error cuz 
// below .catch() is defined and it handles the error
.catch(() => console.log("Error cart not found"))
.then(()=> validateOrder())
// above .then() will throw error cuz that error is not handled with .catch()
// so to handle it we need to rethrow .catch()
// like this so .catch() is to make sure our chain is interrupted and stops flow if error is thrown
.catch(() => console.log("New error ?"))

// Producer : Gets the job done
function createOrder(items){
    const pr =  new Promise(function (resolve,reject){
        if(items){
            resolve(items);
        }else{
            const err = new Error('Cart not found'); // this is not good error handling in producer
            // so use catch() in consumer 
            // reject() in the producer is just to notify that something went wrong.
            // .catch() in the consumer is to react to that error
            reject(err);
        }
    });

    return pr;
}

function validateOrder(cart){
    return new Promise(function(resolve,reject){
        if(cart){
            resolve('Success')
        }
        else{
            reject('No items in cart')
        }
    })
}
