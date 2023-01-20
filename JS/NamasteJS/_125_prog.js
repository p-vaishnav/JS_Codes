// check what bind does

function person() {
    console.log(`Name: ${this.name}, Last-Name: ${this.lastName}, Designation: ${this.designation}`);
}

const details = {
    name: 'Vaishnav',
    lastName: 'Pureddiwar',
    designation: 'CEO'
};

person.bind(details)();

// polyfill of bind