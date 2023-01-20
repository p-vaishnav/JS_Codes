const print = {
    phrase: 'Success',
    numbers: [1, 2, 3, 4, 5, 6, 7],
    loop() {
        // here this is resolved lexically
        this.numbers.forEach((number) => {
            console.log(this.phrase, number)
        })
    }
};

print.loop();