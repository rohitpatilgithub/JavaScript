API = fetch('https://jsonplaceholder.typicode.com/users')

createUser(API)
    .then((response) => response.json())
    .then((users) => console.log("Here : ",users))

function createUser(URL){
    return new Promise(function(resolve,reject){
        URL.then(resolve)
        .catch(reject)
    });
}
