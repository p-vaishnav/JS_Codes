// Object.setPrototypeOf

const functionBundles = {
    getBalance: function() {
        return this.balance;
    },

    increaseBalance: function() {
        this.balance++;
    }
}

function createCustomer(name, balance, branch) {
    const customer = Object.create(functionBundles);
    customer.name = name;
    customer.balance = balance;
    customer.branch = branch;
    return customer;
}

const salariedCustomer = {
    fetchSalary: function() {
        return this.salary;
    }
}

Object.setPrototypeOf(salariedCustomer, functionBundles);
function createSalariedCustomer(name, balance, branch, salary) {
    const customer = createCustomer(name, balance, branch);
    Object.setPrototypeOf(customer, salariedCustomer);
    customer.salary = salary;
    return customer;
}

const jane = createSalariedCustomer('Jane', 1000, 'NY', 10);

jane.increaseBalance()
console.log(jane.getBalance())
console.log(jane.fetchSalary());