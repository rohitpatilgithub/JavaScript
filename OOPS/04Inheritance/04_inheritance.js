// Before ES6 we used to do inheritance like this

// PARENT
function BankManager(name,amount){
    this.userName = name;
    this.balance = amount;
}

BankManager.prototype.deposit = function (amount){
    this.balance += amount;
}

// CHILD
function SavingAccount(name,amount){
    BankManager.call(this,name,amount) // inheriting the instance variables and constructor 
    // how is contructor inherited ?
    // we call the Constructor of BankManager using 'this' keyword so that for instance of SavingAccount can use it
    this.limit = 5000;
}

// Adding additional functionality to SavingAccount
SavingAccount.prototype.personalLoan = function(amount){
    this.loan = amount;
}

// We point Parent class BankManager Prototype to SavingAccount prototype
SavingAccount.prototype = Object.create(BankManager.prototype);

// Minor but Important thing to keep in mind
// Even though our constructor is working for SavingsAccount but internally it is pointing towards BankManager
console.log(SavingAccount.prototype.constructor === SavingAccount) // false 

SavingAccount.prototype.constructor = SavingAccount;

console.log(SavingAccount.prototype.constructor === SavingAccount) // true

// Usual way of creating object from Parent class
rohit = new BankManager('Rohit',2000);
rohit.deposit(1000);
console.log(rohit)

// Inherited and then methods are in use
rohan = new SavingAccount('Rohan',500);
rohan.deposit(1000);
console.log(rohan)
