// implemeent Promise.all
// Promis.all takes an array of promises and returns an array after resolving each of them


function showText(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, time);
    });
}

/*Promise.all([showText('Excellence', 1000), showText('Patience', 2000), Promise.resolve('Calm')]).then((val) => {
    console.log(val);
});*/

// lets implement my own Promise.all

function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let result = [];
        promises.forEach((promise, i) => {
            promise.then((res) => {
                result.push(res);
                if(result.length === promises.length) {
                    resolve(result);
                }
            }).catch((err) => reject(err));
        });
    });
}
myPromiseAll([showText('Excellence', 1000), showText('Patience', 2000), Promise.resolve('Calm')]).then((val) => {
    console.log(val);
})