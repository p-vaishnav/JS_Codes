// function fun() {
//     console.log(this);
// }

const fun = () =>  {
    console.log(this);
}

const person = {name: 'Vaishnav'};

fun.bind(person)();