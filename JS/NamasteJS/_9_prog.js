// block scope and shadowing in js
{
    var a = 'Success'; // moves one level up;
    let b = 'Excellence';
    const c = 'Patience';
    console.log(a, b, c);
}

console.log(a);

// shadowing in js

// using var

var a1 = 'Not Focused on results';
{
    var a1 = 'Disciplined';
    console.log(a1); // shadows outter variable as well as changes value; as they point to same location
}
console.log(a1);

// using let
let b1 = 'Not Focused on results';
{
    let b1 = 'Disciplined';
    console.log(b1); // shadows outter variable but not changes outer variable
}
console.log(b1);

// variable shadowing occurs when a variable declared inside block, function has a same name as of outside; so variable inside block, function will shadow the variable outside the scope

// var are function scoped i.e will eb attached to global or local


{
    let a = 'success';
    {
        let a = 'patience';
        {
            let a = 'present;'
            {
                let a = 'calm';
            }
            console.log(a);
        }
    }
}

