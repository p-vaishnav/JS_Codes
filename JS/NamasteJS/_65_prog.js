function a() {
    for(var i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i);
        }, i*1000)
    }
}
//a();


function b() {
    for(let i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i);
        }, i*1000)
    }
}
//b();


function c() {
    for(let i = 0; i < 3; i++) {
        function fun(i) {
            setTimeout(function() {
                console.log(i);
            }, i*1000);
        };
        fun(i);
    }
}
c();