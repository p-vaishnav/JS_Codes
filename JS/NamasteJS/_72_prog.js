// adding property dynamically in js
const property = 'firstName';
const value = 'Vaishnav';

const buggyObj = {
    property: value
};

console.log(buggyObj); // {property: 'Vaishnav'}

const correctObj = {
    [property]: value
}

console.log(correctObj); // {firstName: 'Vaishnav'}