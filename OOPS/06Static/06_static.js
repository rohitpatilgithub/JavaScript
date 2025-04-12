// Use of Static keyword
// Static allows us to access properties of class without creating a new instance

// Below is code demonstration : 

class Admin{
    static #name = 'Rahul';
    static adminName(){
        return Admin.#name;
    }
}
// console.log(Admin.#name); // this won't work even if our property is static
console.log(Admin.adminName()); // we can access static private like this

// Can we use static method inside our non - static?
// Yes !!
class Calci{
    static add(a,b){
        return a + b;
    }

    multiply(a,b){
        return Calci.add(a,0) * b;
    }
}

sum = new Calci();
console.log(sum.multiply(3,4)); // 12
console.log(Calci.add(1,2)); // 3

// static can be used as fixed configuration ( can share data across instances)

class User{
    static id = 1;
    constructor(name,age){
        this.name = name,
        this.id = User.id++;
        this.age = age
    }

}

const user1 = new User('Rohit',20); // id : 1
const user2 = new User('Rohan',30); // id : 2
const user3 = new User('Rahul',10); // id : 3

// static can be used to create instances with special properties
// Here we have static ( factory method ) which is configuring the instance

class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    static createAdmin(name) {
        return new User(name, "admin");
    }
}

const admin = User.createAdmin("Alice");
console.log(admin.role); // Output: admin
