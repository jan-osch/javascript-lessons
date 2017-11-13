// class is the new syntax, before that prototype was used to simulate inheritance (avoid)
// class defines methods for it's instances
class Animal {

    // in constructor you can use this to remember private properties
    constructor(name) {
        // Convention for private properties
        // Private data is what we don't want other Classes and functions to be aware of
        this._name = name;
    }

    // This is a method
    makeSound(){
        console.log('...');
    }

    move(){
        console.log('___')
    }

    // This is called getter
    get name() {
        return this._name;
    }

    // This is a setter
    set name(name){
        console.log('Someone is giving me a name, Yay I have to call my parents!');
        return this._name = name
    }
}

// EXAMPLE 1
const ameba = new Animal('?');
// console.log('is ameba instance of Animal? ', ameba instanceof Animal);
//
// console.log(`Who are you? - I'm ${ameba.name}`);
// ameba._name = 'Krzysztof'; // don't do that to please
// console.log(`Who are you? - I'm ${ameba.name}`);
// ameba.name = 'Rupert';
// console.log(`Who are you? - I'm ${ameba.name}`);


// Extends Each Mammal is an Animal - but it has some new/additional capabilities
// Mammal is now a subclass of Animal
// Animal is now a superclass of Mammal
class Mammal extends Animal {

    // This is called method - this is function
    // Note this overrides super class implementation
    move() {
        console.log(`${this._name} walks - tup tup`)
    }
}

// EXAMPLE 2
// const fluffy = new Mammal('Fluffy');
// fluffy.move(); // calling a method


class Dog extends Mammal {
    makeSound() {
        console.log(`${this._name} goes - wof wof`)
    }
}

class Cat extends Mammal {
    makeSound() {
        console.log(`${this._name} goes - meow meow`)
    }
}

// EXAMPLE 3
// const cat = new Cat('Mewton');
// const dog = new Dog('Pluton');
// cat.makeSound();
// dog.makeSound();


class Owl extends Animal {
    // This is what called override
    // When we call move() on an instance of an owl it uses new method
    move() {
        console.log(`${this._name} flies - siuuu`)
    }

    makeSound() {
        console.log(`${this._name} goes - uhu- uhu`)
    }
}

// EXAMPLE 4
// const owl  = new Owl('Hubert');
// owl.makeSound();
// owl.move(); // no more tup tup


class Farmer extends Mammal {

    constructor(name) {
        super(name);
        this.animals = [];

        Farmer.count++;
    }

    addAnimal(animal) {
        this.animals.push(animal)
    }

    sing() {
        console.log(`${this._name} sings La-la-la`);

        // Iterating through an array
        for (const animal of this.animals) {

            // Farmer only knows that animals move and makeSound methods
            animal.makeSound();
        }
    }

    move() {
        // We call method from super class
        super.move();

        for (const animal of this.animals) {
            animal.move();
        }
    }

    // Static method - available to without an instance of a class
    // You cannot use `this` in static methods
    static howManyFarmers() {
        console.log(`There are ${Farmer.count} living in this valley`);
    }
}
// Static property
Farmer.count = 0;

// EXAMPLE 4
// const bob = new Farmer('Bob');
//
// const max = new Dog('Max');
// const tom = new Cat('Tom');
// const garfield = new Cat('Garfield');
// const hedwig = new Owl('Hedwig');
//
// bob.addAnimal(max);
// bob.addAnimal(tom);
// bob.addAnimal(garfield);
// bob.addAnimal(hedwig);
//
// bob.sing();
// console.log();
// bob.move();
//
// const frank = new Farmer('Frank');
// frank.sing();
//
// Farmer.howManyFarmers();