// Promise has API
// Here we have Promise.any()
// Promise.any() get promise that is first setteled success ( resolve only )

const promise1 = new Promise(function(resolve,reject){
    setTimeout(()=>{ reject(("Promise 1 is rejected")) },5000)
    // setTimeout(()=>{ resolve(("Promise 1 is resolved")) },5000)
});

const promise2 = new Promise(function(resolve,reject){
    setTimeout(()=>{ reject(("Promise 2 is rejected")) },1000)
});

const promise3 = new Promise(function(resolve,reject){
    setTimeout(()=>{ reject(("Promise 3 is rejected")) },2000)
});

Promise.any([promise1,promise2,promise3])
    .then((res) => console.log(res))
    .catch((err) => {
        console.error(err)
        console.log(err.errors) // here we are smartly adding err in errors array and logging it
    }) 

// If all Promises 'fail' it gives us Aggregate error : All promises were rejected
// Aggregate Error is collective form of promises rejected in Promise.any
// We can get our error but we have to smartly put it in array and log it
