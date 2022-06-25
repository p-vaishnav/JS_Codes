// How the class and constructor works?

// class are functions under the hood;

// when checking CreateCustomer.prototype it returns {constructor: f, getBalance: f, increaseBalance: f};

class CreateCustomer {
    constructor(name, branch, balance) {
        this.name = name;
        this.branch = branch;
        this.balance = balance;
    }

    getBalance() {
        return this.balance;
    }

    increaseBalance() {
        this.balance++;
    }
}

const customer1 = new CreateCustomer('Vaishnav', 'Chandrapur', 10000);
customer1.increaseBalance();
console.log(customer1.getBalance());
