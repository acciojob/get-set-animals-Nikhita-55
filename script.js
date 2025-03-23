//complete this code
class Animal {
  constructor(species) {
    this.species = species; // Store species in a private variable
  }

  // Getter for species
  get species() {
    return this.species;
  }

  // Method to make a sound
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// Cat Class - Inherits from Animal
class Cat extends Animal {
  constructor() {
    super('Cat'); // Call the parent class constructor with 'Cat' as species
  }

  // Method to purr
  purr() {
    console.log('purr');
  }
}

// Dog Class - Inherits from Animal
class Dog extends Animal {
  constructor() {
    super('Dog'); // Call the parent class constructor with 'Dog' as species
  }

  // Method to bark
  bark() {
    console.log('woof');
  }
}

// Example Usage:

// Create instances of Cat and Dog
const myCat = new Cat();
const myDog = new Dog();

// Call methods on Cat and Dog instances
myCat.makeSound(); // Output: The Cat makes a sound
myCat.purr(); // Output: purr

myDog.makeSound(); // Output: The Dog makes a sound
myDog.bark(); // Output: woof

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
