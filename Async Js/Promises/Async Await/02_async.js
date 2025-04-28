// async function & await
// ' await ' waits for result before moving to next line

const p1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("Hello World")
    } , 5000);
})


const p2 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("Bye World")
    } , 10000);
})

async function callMe() {
    const p = await p1; // waits for value in const p
    console.log(p)
    const q = await p2; // waits for value in const q
    console.log(q)
}

callMe();

// callMe() inside call stack
// discarded due to await keyword
// after 5000ms ( 5s ) await is settled
// callMe() again into call stack
// gets discarded again due to await keyword
// after 10000ms ( 10s ) await is settled
// again callMe() is in call stack
