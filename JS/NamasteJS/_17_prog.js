// How to create objects using functions??

// using new keyword

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// this is also similar has one flaw in it see what it is
function Person1(name, age) {
    const person = {};
    
    person.name = name;
    person.age = age;

    // same copies will be created for each and every object
    person.birthday = function() {
        person.age++;
    }

    return person;
}



const vaishnav = new Person('Vaishnav', 22);

console.log(vaishnav);

// banking application
function createCustomer(name, accountBalance, branch) {
    const customer = {};

    customer.name = name;
    customer.accountBalance = accountBalance;
    customer.branch = branch;

    customer.increaceBalance = function() {
        customer.accountBalance++;
    }

    return customer;
}

const rahul = createCustomer('rahul', 1000, 'Sangli');
const rudra = createCustomer('rudra', 2000, 'Akola');

console.log(rahul);
console.log(rudra);