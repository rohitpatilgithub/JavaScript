// Promise has API
// Here we have Promise.all()
// Promise.all() needs all the promises resolved otherwise our collection will throw an error

const promise1 = new Promise(function(resolve,reject){
    setTimeout(()=>{ resolve(("Promise 1 is resolved")) },3000)
});

const promise2 = new Promise(function(resolve,reject){
    setTimeout(()=>{ resolve(("Promise 2 is resolved")) },1000)
});

const promise3 = new Promise(function(resolve,reject){
    setTimeout(()=>{ reject(("Promise 3 is rejected")) },2000)
});

Promise.all([promise1,promise2,promise3])
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
