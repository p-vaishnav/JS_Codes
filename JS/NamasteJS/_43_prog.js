// some promise examples

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Demis has produced Album'), 1000);
});

promise1.then((value) => {
    console.log(value);
}, (err) => {
    console.log(err);
}).finally(() => {
    console.log('Fans waited for next release');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Demi was unable to produce albumns'), 1000);
});

promise2.then((value) => {
    console.log(value);
}, (err) => {
    console.log(err);
}).finally(() => {
    console.log('Fans waited for next release');
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Demi was unable to produce albumns due to sore throat'), 1000);
});

promise3.then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log('Fans waited for next release');
});