// a good to know parameter for function JSON.stringify()

const healtifyApp = {
    name: 'Vaishnav',
    weight: 90,
    fat: 60
};

console.log(JSON.stringify(healtifyApp, ['weight', 'fat']));