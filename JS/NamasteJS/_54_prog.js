// all reduce code goes here

// Array.prototype.reducer

function total(arr) {
    /*const reducer = (sum, value) => {
        return sum + value;
    }*/
    const reducer = (sum, value) => sum + value;
    // reducer function gets first arg is accumalator value from prev compution and 2nd arg as current array index
    const ans = arr.reduce(reducer, 0);
    return ans;
}

console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// using reducer on objects
const items = [
    {item: 'Eggs', price: 10},
    {item: 'Bread', price: 20},
    {item: 'Chicken', price: 120},
    {item: 'Coffee', price: 60},
    {item: 'Oil', price: 400}
]

// different ways of computing values via reduce
console.log(items.reduce((tot, item) => tot + item.price, 0));

console.log(items.map((item) => item.price).reduce((tot, price) => tot + price, 0));

// grouping values, of finding frequency of ages in object
const people = [
    {name: 'Alison', age: 34},
    {name: 'Joe', age: 31},
    {name: 'Rutu', age: 24},
    {name: 'Dev', age: 24},
    {name: 'Virat', age: 31},
    {name: 'MSD', age: 40}
]
console.log(people.map((p) => p.age).reduce((freq, age) => {
    if (age in freq) {
        freq[age] += 1
    } else {
        freq[age] = 1;
    }
    return freq;
}, {}))