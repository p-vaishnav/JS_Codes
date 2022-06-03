// async & await in JS

// async return before a function just returns promise

// keyword await is used untill the promise is resolved

async function fun() {
    // internally it wraps non-promises outside promises.
    return 'success';
}

fun().then((value) => console.log(value));

// await ensures that JS wait untill the promise is resolved

function _await(wait) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('excellence');
        }, wait);
    });
}

// testing await
async function testingWait() {
    const promise = await _await(5000);
    console.log(promise);
}

testingWait();

