// Block is meant to wrap our multiple statements where we use at places where we are meant to use single statement
// ex : if(true) console.log("Hi");

// Using block
// ex : if(true){
//      let a = 10;
//      console.log("Hello : "+a)
// }

// {
//     // Compount statement
//     var a = 10;
//     console.log(a)
// }

// // Block scope means what all 'var' and 'func' we can access in our block
// {
//     let a = 10;
//     const b = 20;
//     var c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);// here our scope of block ends so error is thrown
// console.log(b);// same
// console.log(c);// "c" is at global level so no issues

// Shadowing means if we have same named var outside block shadowing is expected
let x = 10;
const y = 100;
var z = 1000;
{
  let x = 1;
  const y = 2;
  var z = 3;
  console.log("______");
  console.log(x); // 1
  console.log(y); // 2
  console.log(z); // 3
  console.log("______");
}
console.log(x); // 10 different memory locations ( 1 inside block scope and 1 inside global )
console.log(y); // 100 different memory locations ( 1 inside block scope and 1 inside global )
console.log(z); // 3 cuz global scope and we point to same memory location

// Note : These blocks can follow lexical scope chain pattern
const t = 10;
{
  const t = 100;
  {
    const t = 1000;
    {
        console.log(t);  // 1000
    }
  }
}