// what will be the output of the below code??

const value = {number: 10};

// spread operator internally clones it
const add = (x = {...value}) => {
    console.log(x.number += 10);
}

add(); // 20
add(); // 20
add(value); // 20
add(value); // 30
add(value); // 40
add(value); // 50