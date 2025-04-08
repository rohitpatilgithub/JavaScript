// We are creating objects and methods using function constructor
// This is not at all recommended
// camelCasing -> functions
// PascalCasing -> class , constructor

// function BankManager(name,balance){
//     this.accountNumber = new Date().getTime();
//     this.userName = name;
//     this.balance = balance;

//     this.deposit = (amount) => {
//         this.balance += amount;
//     }

//     this.withdraw = (amount) => {
//         this.balance -= amount;
//     }
// }

// customer00 = new BankManager('Rohit',1000);
// customer00.deposit(500);
// customer00.withdraw(100);
// console.log(customer00.balance); // 1000 + 500 - 100 = 1400 is final output


// =============================================================

accounts = [];

function BankManager(name,balance) {
    this.accountNumber = new Date().getTime();
    this.userName = name;
    this.balance = +balance;

    this.deposit = (amount) => {
        this.balance += amount;
    }
}

const accountFrm = document.querySelector('#accountForm');
const accName = document.querySelector('#accountName');
const accBalance = document.querySelector('#accountBalance');

accountFrm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const acc = new BankManager(accName.value,accBalance.value);
    accounts.push(acc);
    console.log(accounts); 
})

const depositFrm = document.querySelector('#depositForm');
const accNo = document.querySelector('#acNumber');
const depositAmt = document.querySelector('#depositamount');

depositFrm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const a = accounts.find((ac) => ac.accountNumber === +accNo.value)
    // breakdown of .find()
    // we are trying to find object 'a' from accounts
    // if acc.accountNumber === accNo.value then we assign that particular account to const a;
    a.deposit(+depositAmt.value)
    console.log(accounts)
})
