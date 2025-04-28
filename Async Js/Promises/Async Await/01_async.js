
// async function
// async makes function return a promise
async function comms() {
    return "GGs"    // here a promise is created which has resolved "GGs"
}

pr = new Promise((resolve,reject)=>{
    setTimeout(()=> {
        resolve("Goat shit")
    },3000)
})

// If we want to explicitly return a promise
async function point() {
    return pr; // we can assign like this , it won't wrap promise inside promise
}

// Without Asnyc Await
// function good(){
//     pr.then((res)=> console.log(res))
//     console.log("Hmmm...")
// }
// good();


// With Async Await
async function goat() {
    console.log("Before it will execute but ...")
    const val = await pr;
    console.log(val);
    console.log("Hehe he waited")
}

goat();
