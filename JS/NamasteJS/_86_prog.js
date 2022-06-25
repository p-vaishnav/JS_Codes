// Implement Promise.all once again
function showText(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, time);
    });
}
const _arr = [showText('Vaishnav', 1000), showText('Rahul', 2000), showText('Rudra', 3000), Promise.resolve('Patience')];
// Promise.all(_arr).then((val) => console.log(val))

function myPromiseAll(promises) {
    let result = []
    return new Promise(async (resolve, reject) => {
       promises.forEach((p) => {
            p.then((v) => {
                result.push(v);
                if (result.length === promises.length) {
                    resolve(result);
                }
            });
       });
    });
}

myPromiseAll(_arr).then((val) => console.log(val));