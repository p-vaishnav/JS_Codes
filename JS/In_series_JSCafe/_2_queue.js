console.log("Success");
setTimeout(() => console.log("Patience"), 0);
Promise.resolve(() => console.log("Excellence")).then(res => res());
console.log('A karma yogi');