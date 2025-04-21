// Producer Practice
// Task : Create a Delayed Promise (Producer)

API = fetch('https://jsonplaceholder.typicode.com/users')

// Below we create a function which created a promise explicitly ( Producer )
// We also have set a delay to promise

function delayedPromise(url){
    return new Promise(function(resolve,reject){
        setTimeout(()=> {               // Delay handled by setTimeout before even proceeding
            console.log("Delayed...")
            url.then((response) => {    // API response
                if(!response.ok){       // Response if rejection is faced
                    reject("Rejection faced bruhh")
                }
                else{                   // Response if resolved
                    response.json().then((data) => {
                        data.forEach((element,index) => {
                            console.log((index + 1) + " : " + element.name)
                        });
                        resolve(data);
                    })
                    .catch(() => reject("Error parsing json !")) // If parsed data has error
                }
            })
            .catch((err) => reject("Ahhh error "+err)) // If API / netword is messed up !!
        },2000)
    })
}

delayedPromise(API)
    .then((data) => {   // if data is resolved 
        if(data) { console.log("Nice .") }
    })                  // Collective rejection
    .catch((err) => console.log("NOT AGAIN !!!!"+err))
