class Person{
    constructor (name,age){
        this.name = name;
        this.age = age;
    }

    getAge() {
        console.log(this.age)
    }
}

// Prototype is property of function / class
// Prototype holds methods and properties 
// When instance of function / class is created using new , its prototype points to contructors Prototype

// __proto__ is in every object
// It contains shared methods and properties defined by class or function

// When we create class Person
// Js creates Person.prototype object
// __proto__ contains information of its base class
// __proto__ doesn't contain the methods and properties; it points to an object that does.

// Whenever a Object of class 'Person' is created 
// ex : p1 = new Person();
//      p1.__proto__               === Person.prototype
//      Person.prototype.__proto__ === Object.prototype
//      Object.prototype.__proto__ === null

p1 = new Person();
p2 = Object.create(p1);
console.log(p2);
