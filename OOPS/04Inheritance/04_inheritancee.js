// After ES6 we do inheritance like this
// We use 'class' as a blueprint to create object
// Methods can be shared between instances via prototype
// No need to manually define methods to prototype

class BankManager{
    userName;
    balance;
    accountNumber;
    constructor(name,amount){
        this.userName = name;
        this.balance = amount;
        this.accountNumber = Date.now();
    }

    deposit(amount){
        this.balance += amount;
    }
    withdraw(amount){
        this.balance -= amount;
    }
}

// Here we do inheritance of 'class' using 'extend' keyword
// 'extend' keyword sets up prototype of CurrentAmount (child) from BankManager (parent)
class CurrentAmount extends BankManager {
    limit = 5000;
    constructor(name,amount){
        // to get access of parent class constructor, we use 'super' keyword
        super(name,amount);
    }

    businessLoan(amount){
        this.loan = amount;
    }
}

rohit = new CurrentAmount('Rohit',500);
rohit.deposit(100);
rohit.withdraw(50);
rohit.businessLoan(1000);
console.log(rohit);
// check the console of 'rohit' to get to know the Prototype and chaining ( inheritance will be cleared )
