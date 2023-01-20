// my normal function
function NormalFunction() {
    this.value = 'Succcess';
}

console.log(NormalFunction.prototype);

const obj = new NormalFunction();
console.log(obj.value);