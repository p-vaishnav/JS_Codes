// somewhat confusing extends keyword of JS

// as well as super is confusing huh!!

// revisist it

// heher CreateCustome.call(this, ... args) are not passed and super also behaves somewhat differently

// diagram which has been made is also different

// __proto__ is not same as a '[[Prototype]]', __proto__ is just a getter/setter for Prototype

class CreateCustomer {
    constructor(name, balance, branch) {
        this.name = name;
        this.balance = balance;
        this.branch = branch;
    }

    getBalance() {
        return this.balance;
    }

    addMoney() {
        this.balance++;
    }
}

class CreateSalariedCustomer extends CreateCustomer {
    constructor(name, balance, branch, salary) {
        super(name, balance, branch);
        this.salary = salary;
    }

    fetchSalary() {
        return this.salary;
    }
}

const customer = new CreateSalariedCustomer('Success', 1000, 'XYZ', 10);

customer.addMoney();
console.log(customer.getBalance());
console.log(customer.fetchSalary());

// lots of question to ask??

// CreateSalariedCustomer.__proto__ === CreateCustomer.prototype it is returning false

