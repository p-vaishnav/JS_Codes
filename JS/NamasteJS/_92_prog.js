// tagged template literals
function tag(strings, ...values) {
    console.log(strings);
    console.log(values);

    return 'JS Nuggets';
}
let a,b = 10;
tag`Hello World`