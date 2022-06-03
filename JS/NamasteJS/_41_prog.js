console.log('start..');

setTimeout(() => {
    console.log('callback called');
}, 5000);

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}
console.log('while loop ends');