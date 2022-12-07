// lets try promise/chaining example that I have seen in projFrontEnd

const fetchNumbers = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('[1,2,3,4,5,6,7,8,9]');
        }, 5000);
    }).then((data) => {
        return JSON.parse(data);
    });
}

const preloadData = () => {
    return fetchNumbers()
            .then(data => {
                console.log('In second then', data);
            })
}

preloadData();