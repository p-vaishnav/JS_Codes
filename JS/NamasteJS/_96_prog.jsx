// console.log('In Promises...');

// /*
// function Promise() {...}
// */

// function _createPromise(text, lag) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text);
//         }, lag);
//     });
// }

// const _promise = _createPromise('Hello Promise', 5000);
// _promise.then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     // to handle errors
//     console.log(err);
// });

// // handling promises via async/await

// setTimeout(() => {
//     console.log('In call back');
// }, 0);

// new Promise((res) => res('In promise')).then(res => console.log(res));

// function Person(name) {
//     // const this = {};
//     this.name = name;
//     // return this;
// }

// const person = new Person('Aman');
// console.log(person);

// function fun1() {
//     console.log('callback');
// }

// function fun2(fun1) {
//     fun1();
// }

// fun2(fun1);

// function add(a = 10, b = 10, ...c) {
//     console.log(c);
//     // const res = a + b;
//     return c.reduce((p, i) => p + i, a + b);
// }

// console.log(add(30, 20, 10, 10, 10));

// // particular object??
// const _obj = {};

// _obj.a = 1;
// _obj['b'] = 2;
// _obj['c d'] = 3;

// // let a = [1,2,3];
// // let b  = new Set();

// // _obj[] = 5;
// // _obj[] = 6;

// let a = {a: 1, c: [1,2,3]};
// // TODO: how to add a key
// let b = {b: 2, ...a, d: 6};

// a.c[0] = 4;
// console.log(b);

let x = 'abcdef';
console.log(x.split('').reverse().join(''));

function _reverseString(_str) {
    let res = [];
    for(let  i = _str.length - 1; i > -1; i --) {
        res += _str[i];
    }
    return res;
}


console.log(_reverseString(x));

console.log([{name: 'vaishnav'}, {name: 'aman'}, {name: 'rohan'}, {name: 'aman'}].filter((val) => val.name === 'aman'));

console.log(
[{name: 'vaishnav'}, {name: 'aman'}, {name: 'rohan'}, {name: 'aman'}].map((val) => {
    if (val.name === 'aman') {
        return val;
    }
}).filter(val => val !== undefined));

/*
useEffect(() => {}); // execute on each component render

useEffect(() => {}, []); // execute only once component render

useEffect(() => {

    return () => {
        // clean-up callback
    }
}, [name]); // execute only when name will be updated
*/

const App = () => {

    const [name, setName] = useState();
    return (
        <>
            <input className="input-style" id="" onChange={(e) => setName(e.target.value)}/>
            <h1>{name}</h1>
        </>
    );
}

// booking a seat in an theatre
// Seats Model

// {
//     rowName: '',
//     seats: '',  []
//     marked: '', [] // show it in grey
//     booked: '' , []// show it in red
// }

// User Model
// {
//     name: '',
//     email: '',
//     phone: ''
// }

// a 1 2 3 4 5 6 7 8 9 
// b 1 2 3 4 5 6 7 8 9
// c 1 2 3 4 5 6 7 8 9
// d 1 2 3 4 5 6 7 8 9

// 1) authenticate a user - signup
// 2) authorize a user - signin - send jwt token
// 3) book tickets

// Model for seats
// 

// 2 users

// 1st user marked (c 4 5 6)
// show this as disabled from UI
// inititate a timer of 5 min to book his tickets and proceed to payment 
// if yes then push it into booked array
// else timer exceeds a certain time remove that particular seats from marked array

