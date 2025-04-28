// Real world example
const API = "https://api.github.com/users/rohitpatilgithub"

// fetch() => Promise that return Response object
// fetch() => Response object ( contains readable stream )
// .json() => Promise that returns json value
// Response.json() => json value

async function userInfo() {

   const data = await fetch(API);       // waits for fetch Promise to settle
   const jsonValue = await data.json(); // waits for json Promise to settle

   console.log(jsonValue)

}

userInfo();

// 1. UserInfo() into call stack
// 2. await keyword discards the userInfo() until fetch() is settled
// 3. After fetch() is settled then on next line await keyword discards the userInfo() until json() promise is settled
// 4. Thus after json() is settled , userInfo() gets into call stack
// 5. later logs jsonValue
