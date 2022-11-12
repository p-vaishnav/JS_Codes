// solution of this is promise

// promise 

const cart = ['shoes', 'g-shock', 'casio'];

function addToCart(cart) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(JSON.stringify(cart));
        }, 5000);
    });
} // addToCart

function proceedToPayment(details) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(details + Date.now());
        }, 5000);
    });
} // proceedToPayment

const orders = [];
function confirmOrder(orderId) {
    orders.push(orderId);
    console.log('Orders : ', orders);
} // confirmOrder

addToCart(cart)
    .then((details) => proceedToPayment(details))
    .then((orderId) => confirmOrder(orderId));