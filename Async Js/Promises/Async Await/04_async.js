// Error handling in async await
// Try catch is used
// Simple english is enough
// try this
// catch the error instead

const API = "https://invalid"

async function userInfo() {

   try{
        const data = await fetch(API);       // waits for fetch Promise to settle
        const jsonValue = await data.json(); // waits for json Promise to settle
        console.log(jsonValue)
   }

   catch (err) {
        console.log(err);
   }

}

userInfo();

// Conclusion 
// Asnyc is keyword used on a function which makes it different from normal function
// await is keyword only to be used in async function which lets our program to take a pause until result is resolved

// async await is syntaxtically similar to native promise .then / .catch()
