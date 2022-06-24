// What is difference between JSON.parse and JSON.stringify?

// What is its common use case?

// to store it in a local storage

// key value pair should always be in string format if storing in local storage

const person = {
    name: 'Vaishnav',
    age: 22,
    company: 'PTC'
};

const strObj = JSON.stringify(person);

localStorage.setItem('test', strObj);

console.log(JSON.parse(localStorage.getItem('test')));