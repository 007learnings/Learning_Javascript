// Different ways to create a object

// ? 1. Object literal notation
// Advantage: This method is simple and concise for creating one-off objects.
// Disadvantage: Not suitable for creating multiple objects with shared properties or methods.
const obj = {};

// Use Case: Ideal for creating single, standalone objects representing entities like a user or a configuration object.

// ? 2. Constructor Functions:

// Advantage: Allows you to create multiple objects with shared properties and methods.
// Disadvantage: Can lead to inefficiency if you define methods on the constructor itself, as each object will have a separate copy.

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const john = new Person("John", "Doe");
const jane = new Person("Jane", "Smith");

// Use Case: Suitable for creating multiple instances of the same type of object, like creating multiple person objects.

// ? 3.Object.create():

// *Advantage: Allows you to create objects with a specific prototype, enabling inheritance.

// *Disadvantage: Syntax can be less concise.
const personPrototype = {
  sayHello: function () {
    console.log(`Hello, my name is ${this.firstName}.`);
  },
};

const rohan = Object.create({});
rohan.firstName = "John";
rohan.lastName = "Doe";

//  ? 4 Class Syntax (ES6)

// Advantage: Provides a more structured and readable way to create objects with shared properties and methods.
// Disadvantage: Requires a good understanding of classes and can be overkill for simple objects.

class Uncle {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.firstName}.`);
  }
}

const mohan = new Uncle("Mohan", "Uncle");
console.log(mohan);


// Factory Functions:

// Advantage: Offers a flexible and concise way to create objects with encapsulated properties and methods.
// Disadvantage: Requires a solid understanding of functions and closures.