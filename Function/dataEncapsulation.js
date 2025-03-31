function Counting(){
    var count = 0;// this is encapsulated ( cannot be accessed outside this ' Counting() ' function )
    this.incrementCount = () => {
        count++;
        console.log(count)
    }
    this.decrementCount = () => {
        count--;
        console.log(count)
    }
}

counter1 = new Counting()
counter1.incrementCount();
counter1.incrementCount();
counter1.decrementCount();
counter1.decrementCount();

console.log("___________")

counter2 = new Counting()
counter2.incrementCount();
counter2.incrementCount();
