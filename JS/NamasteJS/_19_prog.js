// what is __proto__?

// Object.create return an empty object; and attaches its __proto__ to the passed objects

// hence reusing the same function

const myFunctions = {
    getBalance: function() {
        return this.balance
    },
    increaseBalance: function() {
        this.balance++;
    }
}

function createCustomer(name, branch, balance) {
    
    const customer = Object.create(myFunctions);
    customer.name = name;
    customer.branch = branch;
    customer.balance = balance;

    return customer;
}

const customer1 = createCustomer('Vaishnav', 'Vadgaon', 1000);
console.log(customer1);
customer1.increaseBalance();
console.log(customer1.getBalance());

const customer2 = createCustomer('Rahul', 'Vadgaon', 1000);
console.log(customer2);
customer2.increaseBalance();
console.log(customer2.getBalance());

// ----
console.log('Below chain is important')
console.log(customer1.getBalance === customer2.getBalance);
