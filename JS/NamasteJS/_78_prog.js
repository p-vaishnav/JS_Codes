// basic examples on spread operator

console.log([...'Vaishnav']);

const user = {name: 'vaishnav', age: 22};
const admin = {admin: true, ...user};

console.log(admin);