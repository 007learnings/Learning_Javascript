//  add values, update , delete value

// 1. Dot Notation:

const user = {};

user.name = "Gabbar singh"; // add
// console.log(user.name);

user.name = "Ninu Chopra"; // update
// console.log(user.name);

// 2. Bracket Notation:

const shop = {};

shop["Chocolate"] = 10;
// console.log(shop.Chocolate , shop['Chocolate']); // add

shop["Chocolate"] = 24;
// console.log(shop.Chocolate , shop['Chocolate']); // update


// 3. Object literal
const person = {
    name: 'John',
    age: 30,
    gender: 'Male',
  };

// console.log(person);


const moreInfo = {
    ...person,
    city:'uganda',
    age:40,
};

// console.log(moreInfo);


// 4. Object.assign() (Merging objects):

// add
const Student = {};
Object.assign(Student, { name: 'John', age: 30 });

// console.log(Student);

Object.assign(Student, { age: 35, occupation: 'Engineer' }); // update
// console.log(Student);

// 5. Object.defineProperty() (Adding and updating with property descriptors):
const jobSeeker = {name:''};
Object.defineProperty(jobSeeker, 'age', { value: 34 });
// console.log({jobSeeker});


// 6

const personProto = { name: 'John' };
const pp = {};
Object.setPrototypeOf(pp, personProto);

personProto.age = 30;

console.log({personProto,pp});
