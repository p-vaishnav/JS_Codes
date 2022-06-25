// how this and new works in JS?

// this keywords points to the caller of the function

// js also contains hidden pointer

// check why it was failing earlier

// new is when used with a function, a empty this obj is created initialized with properties its __proto__ points to the functions prototype
function createCustomer(name, branch, balance) {
    
    this.name = name;
    this.branch = branch;
    this.balance = balance;

}

createCustomer.prototype.getBalance = function() {
    return this.balance;
}

createCustomer.prototype.increaseBalance = function() {
    return this.balance++;
}

// missing new keyword
const customer1 = new createCustomer('Vaishnav', 'Vadgaon', 1000);
console.log(customer1);
customer1.increaseBalance();
console.log(customer1.getBalance());

const customer2 = new createCustomer('Rahul', 'Vadgaon', 1000);
console.log(customer2);
customer2.increaseBalance();
console.log(customer2.getBalance());

// ----
console.log('Below chain is important')
console.log(customer1.getBalance === customer2.getBalance);
