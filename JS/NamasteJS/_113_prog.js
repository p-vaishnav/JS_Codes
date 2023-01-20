// my normal function
const NormalFunction = () => {
    this.value = 'Succcess';
}

console.log(NormalFunction.prototype);

const obj = new NormalFunction();
console.log(obj.value);