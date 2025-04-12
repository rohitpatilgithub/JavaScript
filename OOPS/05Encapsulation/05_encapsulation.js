class BankManager{
    
    userName;
    #balance = 0; // using '#' we can make our instance private
    accountNumber;
    
    constructor(name,amount){
        this.userName = name;
        this.#balance = amount;
        this.accountNumber = Date.now();
    }

    deposit(amount){
        this.#balance += amount;
    }

    withdraw(amount){
        this.#balance -= amount;
    }

    // If we want to set the balance outside as well
    set balance(amount){ // set method name === private instance variable or it work T_T
        this.#balance = amount;
    }

    get balance(){  // same here, get method name === private instance variable or it work T_T
        return this.#balance;
    }
}

class SavingsAccount extends BankManager{
    
    loan;
    limit = 10000;
    
    constructor(name,amount){
        super(name,amount);
    }

    personalLoan(amount){
        this.#calculateInterest(amount);
        this.loan = amount;
        // this.hehe = this.#balance; see we can't access private here !!
    }

    // suppose we have calculations of loan interest
    // obviously we need no one to to interaction with this
    // thus we make our method private
    #calculateInterest(amount){  // #method_name()
        console.log('Calculating loan of ',amount)
    }
}

const rohit = new SavingsAccount('Rohit',1000);
rohit.deposit(1000);
rohit.withdraw(500);
rohit.personalLoan(1000);
// rohit.#balance = 10; cannot access private properties outside

// What if we want to ?
// We can use setters to set a private value outside class
// We can use getter to get a private value outside class

rohit.balance = 10000;  // now private can be accesssed and can be changed
console.log('Calculating balance',rohit.balance); // using getter method hehe

// Did you notice we no longer need to call the getter / setter method to access
// We can directly use the rohit.private_keyword, no need to call like this rohit.private_keyword()
// It is because set and get has this feature hehe so no worriess

console.log(rohit)
