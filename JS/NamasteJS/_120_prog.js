class Animal {
    name = 'animal';
  
    constructor() {
      console.log(this.name); // (*)
    }
  }
  
  class Rabbit extends Animal {
    name = 'rabbit';
  }
  
  new Animal(); // animal
  new Rabbit(); // animal

  