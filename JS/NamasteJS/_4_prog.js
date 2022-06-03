// https://anuradha.hashnode.dev/scope-chain-and-lexical-environment-in-javascript
// Not able to understand it upto the mark
function a() {
    var b = 10;
    c();
    function c(){
        console.log(b);
        var e = 20;
        d();
        function d() {
            console.log(e);
        }
    }
}
a();

// notice about var keyword they have a function scope, not block scope

if (true) {
    var language = "JavaScript";
}
console.log(language);

if (true) {
    // referenceError:
    let lifesMeaning = "KarmaYoga";
}
try {
    console.log(lifesMeaning);
} catch (e) {
    console.log(e, "")
}