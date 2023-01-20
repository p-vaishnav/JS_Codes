// writing to an object does n't use an prototype
const animal = {
    walks: true,
    walk() {
        return 'Walk method from animal';
    }
};

const rabbit = {
    jumps: true,
    __proto__: animal
};

console.log(rabbit.walk());
rabbit.walk = function() {
    return 'Walk method from rabbit';
}
console.log(rabbit.walk());