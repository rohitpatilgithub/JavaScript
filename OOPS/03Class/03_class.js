// A class is a blueprint in JavaScript
// we can create objects through a class

class BankManager{
    customerName;
    accountNumber;
    balance = 0;

    constructor(name,amount = 0){
        this.customerName = name;
        this.balance = amount;
    }

    deposit (amount) {
        this.balance += amount;
    }

    withdraw (amount) {
        this.balance -= amount;
    }
}


// How to create Object ?
const rohit = new BankManager('Rohit',2000);

// new is a keyword that creates a new object from a class.
// It does four things:

// 1. Creates a new object
// 2. Links its __proto__ to Class.prototype, so we can access shared methods like deposit() and withdraw()
// 3. Calls the constructor, where this refers to that new object, so we can assign instance variables (this.customerName, etc.)
// 4. Returns that fully set-up object."

// what is happening here while creating a Object
// const rohit = { } is created
// const rohit = Object.create(BankManager.prototype) 
//      1. here our object is linked to class Prototype
//      2. this will give access to our methods ( deposit , withdraw )

// how our object will look ?
// BankManager {
//   customerName: 'Rohit',
//   balance: 2500,
//   accountNumber: undefined,
//   [[Prototype]]: BankManager.prototype (contains deposit(), withdraw())
//                          ↓
//                   [[Prototype]]: Object.prototype (default JS object methods)
// }


rohit.deposit(1000);
rohit.withdraw(500);
console.log(rohit);

// Most silly but important thing

// we can do hoisting (hehe)
r = new A('Rohit');
r.callMe();
function A(name){
    this.name = name;
    this.callMe = () => {
        console.log("Hello",this.name)
    }
}

// this will throw error
// rr = new Silly('Rohan');
// rr.callMe();

class Silly{
    name;
    constructor(n){
        this.name = n;
    }
    callMe(){
        console.log("Hello ",this.name)
    }
}

// this is correct way ( declare after defining class )
rr = new Silly('Rohan');
rr.callMe();
