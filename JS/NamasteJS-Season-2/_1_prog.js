// just can't watch the video like this needs to document/code what all have I read
console.log('Excellence!!!');

// earlier there was no promises so callbacks were the only way to handle asychronity of our code

// callback hell and inversion of control lead me to this problem

const cart = ['shoes', 'shirt', 'jeans', 'hoodie'];

function addToCart(cart);


function proceedToPayment();

function confirmOrder();

// code is growing horizontally rather vertically, hence harder to maintain
// a problem of callback-hell is occurring
addToCart(cart, function() {
    proceedToPayment(
        function() {
            confirmOrder(function() {
                a(function() {
                    b(function() {
                        c();
                    })
                })
            });
        }   
    );
});
