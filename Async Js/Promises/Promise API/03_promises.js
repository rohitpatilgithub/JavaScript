// Promise has API
// Here we have Promise.race()
// Promise.race() gets any promise that is setteled ( irrespective of resolve / reject ) first

const promise1 = new Promise(function(resolve,reject){
    setTimeout(()=>{ resolve(("Promise 1 is resolved")) },5000)
});

const promise2 = new Promise(function(resolve,reject){
    setTimeout(()=>{ resolve(("Promise 2 is resolved")) },5000)
});

const promise3 = new Promise(function(resolve,reject){
    setTimeout(()=>{ reject(("Promise 3 is rejected")) },2000)
});

Promise.race([promise1,promise2,promise3])
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
