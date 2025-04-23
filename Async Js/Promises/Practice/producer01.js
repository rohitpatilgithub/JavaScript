// Producer Practice
// Task : Create a Delayed Promise (Producer)

API = fetch('https://jsonplaceholder.typicode.com/users')

// Below we create a function which created a promise explicitly ( Producer )
// We also have set a delay to promise

function delayedPromise(url){
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            console.log("Timed out done!!!")
                url.then(function (val){
                return createJson(val);
            })
            // .catch(function (err){   // this catch() doesn't make sense as it is related to fetch() which we already have at line 45
            //     return reject(err)
            // })
            .then(function (val){
                return filterName(val);
            })
            .then(() => resolve(console.log("Successfully logged users")))
            .catch(function (err){
                return reject(err)
            })
        },2000)
    })
}

function createJson(res){
    return res.json();
}

function filterName(value){
    value.forEach((element,index) => {
        console.log((index + 1) + " : " + element.name)
    });
    return value;
}

delayedPromise(API)
    .then(function (){  // when we resolve our promise , we are able to use this local function !!!
        console.log("200 OK")
    })
    .catch(function(err){
        console.log("Error is : "+err);
    });
