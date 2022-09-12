// | 

// here all the exporting will got,

export const qualities = ['success', 'excellence', 'patience'];

export const employee = {name: 'Vaishnav', company: 'Microsoft', position: 'VP'};

export class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

export function sayHi(name) {
    return `Hello ${name}`;
}
