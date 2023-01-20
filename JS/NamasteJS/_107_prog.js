const printNumbers = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8],
    phrase: 'Excellence is the key to Success',
    log() {
        this.numbers.forEach(function(number) {
            console.log(this.phrase, number);
        })
    }
};

printNumbers.log();