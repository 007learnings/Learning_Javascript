//  delete

let a = [1,2,3];
let b = a;

console.log({a,b});

b.pop();

console.log({a,b});


let user = {name:'vikarnt'};
let student = user;

// primitive types are directly store  -> string , number , null, undefined , boolean , bigInt


//  nonprimitive type store reference location
// user :  referenece if of location where {name:'vikarnt'} is stored
// student :referenece if of location where {name:'vikarnt'} is stored
