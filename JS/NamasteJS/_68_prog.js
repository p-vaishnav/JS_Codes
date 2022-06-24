// Object.assign

// prototype is of form Object.assign(target, ...sources);

// object.assign only copies own properties from source to the target maybe they don't assign inherited ones

const widget = {name: 'ptcsvaluedisplay'};
var result = Object.assign({}, widget);
console.log(result);


const box = {height: 100, width: 100}; const style = {color: 'red'};
const boxStyle = Object.assign({}, box, style);
console.log(boxStyle);


// beware of deep clone, Object.assign does a shallow clone altogether,
const obj1 = {a: 1, b: {c: 2}};
const obj2 = Object.assign({}, obj1);

console.log('-----------------------------------------');
console.log(obj2);

obj1.a = 4;
console.log('----------------------------------------');
console.log(obj1); // {a: 4, b: {c: 2}};
console.log(obj2); // {a: 1, b: {c: 2}};

obj2.a = 8;
console.log('------------------------------------------');
console.log(obj1);
console.log(obj2);

// shallow clone
obj1.b.c = 9;
console.log('------------------------------------------');
console.log(obj1); // {a: 4, b: {c: 2}};
console.log(obj2); // {a: 8, b: {c: 9}};