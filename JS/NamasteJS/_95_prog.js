// desctructing in JS
// https://dmitripavlutin.com/javascript-object-destructuring/
// 1, object destructuring
const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne',
    address: {
        city: 'Gotham'
    }
}

// pre ES-2015
// const name = hero.name; const realName = hero.realName

const {name, realName} = hero;
console.log(`Name: ${name}, ${realName}`);
console.log('-----------------------------------');

// 2, Assigning default values if a property does not exist in the object
const {enemies = 'Joker', _name = 'Superman'} = hero;
console.log(`Enemies: ${enemies}, Name: ${_name}`); // Joker && Batman
console.log('------------------------------------');

// 3, Aliases destructure property with an object and Aliasong with different Name
const {realName: secretName} = hero;
console.log(`Secret Name: ${secretName}`);
console.log('------------------------------------');

// 4, Extracting properties from nested object
const {address: {city}} = hero;
console.log(`City: ${city}`);
console.log('------------------------------------');

// 5, Extracting dynamic name property
const prop = 'name';
const {[prop]: __name} = hero;
console.log(`Name: ${__name}`);

// 6, destructuring all the remaining objects using rest operator
// in here after assing value to name all the remaining key value pairs will be applied to rest
const {name: $name, ...rest} = hero;
console.log(`Name: ${$name}, Rest: ${rest}`);
console.log('-------------------------------------');

// 7, function parameter destructuring
const heroes = [
    {name: 'Batman'},
    {name: 'Superman'},
    {name: 'Aquaman'}
]

heroes.map(({name}) => {
    console.log(`Function Destructuring, Name: ${name}`);
})
console.log('------------------------------------------');

// 8, for of loop destructuring
for (const {name} of heroes) {
    console.log(`For loop Destructuring, Name: ${name}`);
}