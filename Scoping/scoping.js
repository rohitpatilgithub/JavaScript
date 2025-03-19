// Scoping is related to Lexical Environment
// Lexical env is local memo + ref. to lexical env of parent
// Below c() is lexically inside a() & a() is lexically inside Global execution context
// Thus chain of lexical env above is called scope chain , it defines whether function or var present inside the scope or not
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b); // 10
  }
}
a();
console.log(b);