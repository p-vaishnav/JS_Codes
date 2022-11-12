// Promises

// what all fields new Error object has check with these

// let's try some trial and error with promise chaining

// .then & .catch
const cart = ['shoes', 'g-shock', 'casio'];

function addToCart(cart) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!cart.length) {
                reject(new Error('Cart is Empty'));
            }
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

// addToCart(cart)
//     .then((details) => proceedToPayment(details))
//     .then((orderId) => confirmOrder(orderId));

addToCart([])
    .then((details) => proceedToPayment(details))
    .then((orderId) => confirmOrder(orderId))
    .catch((err) => {
        console.log(err)
    });
