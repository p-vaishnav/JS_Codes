// for of anf for in

// for of is used to loop over string and array;
let a  = 'success'
for(let i of a) {
    console.log(i);
}

a = [1, 2, 3, 4, 5, 6, 7, 8]
for(let i of a) {
    console.log(i);
}

// for in is used for object
a = {
    name: 'Vaishnav',
    lastname: 'Pureddiwar',
    company: 'PTC',
    designation: 'Associate Software analyst'
}

for(let key in a) {
    console.log(key + ":" + a[key]);
}