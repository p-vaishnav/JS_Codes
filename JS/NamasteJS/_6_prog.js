// What is difference between let, cont && var?, keyword
// -> all the variable are hoisted; just let and const are hoisted in temporal dead zone; and var are hoisted in global object
// temporal dead zone script>

// Temporal Dead Zone

// let variables are not attached to global object
var a = 100;
let b = 1000;
console.log(a);
console.log(b);


// below line will give ReferenceError: Cannot access 'c' before initialization
// console.log(c);
let c = "Success";

// same goes for const declarations
const d = "Excellence";
console.log(d);

// changing (const) d after initialization
// TypeError: Assingment to a constant variable
// d = "Patience";

// const SyntaxError: Missing initializer in const declaration 
// const e;

// works fine don't try with let and const
var a = 'Success';
var a = 'Success';