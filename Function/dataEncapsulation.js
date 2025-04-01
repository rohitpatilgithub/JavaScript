function Counting(){
    var count = 0; // This is local variable ( encapsulated )
    this.incrementCount = function() {
        count++;
        console.log(count)
    }
    this.decrementCount = function() {
        count--;
        console.log(count)
    }
}

counter1 = new Counting()
counter1.incrementCount();
counter1.incrementCount();
counter1.decrementCount();
counter1.decrementCount();

console.log(counter1.count) // this will provide u ' undefined ' & please figure out why !!
// Because our 'count' is not a instance property of Counting()

console.log('\n');

counter2 = new Counting()
counter2.incrementCount();
counter2.incrementCount();
counter2.incrementCount();
console.log(counter2.count) // same ' undefined '

// If you want your brain to fk up then try to understand this
// Hint : what we are doing here is called function constructor
// Below Counting() is non-parameterized constructor function

// function Counting(){
//     this.count = 0;    // we are making it instance
//     this.incrementCount = function () {
//         this.count++;
//         console.log(this.count)
//     }
//     this.decrementCount = function () {
//         this.count--;
//         console.log(this.count)
//     }
// }
// counter1 = new Counting();
// counter1.incrementCount();
// counter1.incrementCount();
// counter1.incrementCount();
// console.log(counter1.count)    // thus now we can access our instance 'count'

// Below is example of parameterized function constructor

// function Animal(name,age){
//     this.name = name;   // we are making it instance
//     this.age = age;     // same
//     this.details = function (){
//         console.log("Name : ",this.name," and ","Age : ",this.age)
//     }
// }

// parrot = new Animal("Lily",10);
// parrot.details();
// console.log(parrot.name)
// console.log(parrot.age)
