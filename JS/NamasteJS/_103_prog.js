function fun() {
    console.log(this);
}
fun();

setTimeout(() => {
    console.log(this);
}, 100);