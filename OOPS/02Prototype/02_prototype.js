function BankManager(name,amount){
    this.name = name;
    this.amount = amount;

    // Our deposit is not memory efficient so lets create method into its prototype
    // this.deposit = (depositAmt) => {
    //     this.amount += depositAmt;
    // }
}

console.log(BankManager.prototype) // here we don't have deposit in prototype

// Now memory is created once and can be shared with all instances
BankManager.prototype.deposit = function (depositAmt) {
    this.amount += depositAmt;
}

console.log(BankManager.prototype) // // here we have deposit in prototype
rohit = new BankManager('Rohit',2000);
rohit.deposit(100);
console.log(rohit)

// At first why it is not efficient for memory ?
// Every time we create instance , our deposit() will consume memory along with object
// So it is convenient to assign it to its prototype
