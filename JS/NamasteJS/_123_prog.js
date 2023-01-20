console.log('Polyfill of bind!!');

function myName() {
    return `${this.name} & ${this.lastname}`;
}

const vaishnav = {name: 'Vaishnav', lastname: 'Pureddiwar'};
const nikita = {name: 'Nikita', lastname: 'Singh'};

console.log(myName.bind(vaishnav)());
console.log(myName.bind(nikita)());

function myBind(fn, context) {
    return () => {
        // huh, oh not getting
        return fn.call(context);
    }
};

console.log(myBind(myName, vaishnav)());
console.log(myBind(myName, nikita)());