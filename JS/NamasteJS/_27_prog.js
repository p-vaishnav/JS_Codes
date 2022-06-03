// new automates some stuff for us; initializes this and returns it


// sideEffect means changing something outer from inner function

// Object.setPrototypeOf

// gaining inheritance via setPrototypeOf

function CreateCustomer(name, balance, branch) {
    this.name = name;
    this.balance = balance;
    this.branch = branch;
}

CreateCustomer.prototype.getBalance = function() {
    return this.balance;
}

CreateCustomer.prototype.increaseBalance = function() {
    this.balance++;
}

function CreateSalariedCustomer(name, balance, branch, salary) {
    // inorder  to intilizae this with its parent properties
    CreateCustomer.call(this, name, balance, branch);
    this.salary = salary;
}

CreateSalariedCustomer.prototype.fetchSalary = function() {
    return this.salary;
}
Object.setPrototypeOf(CreateSalariedCustomer.prototype, CreateCustomer.prototype);

const jane = new CreateSalariedCustomer('Jane', 1000, 'NY', 10);

jane.increaseBalance()
console.log(jane.getBalance())
console.log(jane.fetchSalary());