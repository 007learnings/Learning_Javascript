//1.   Number 

let num = 134; // int
let num1 = 123.34; // float


let nan_Num =NaN;  // NaN  (Not a number)
let nan_Num1 = 'hello' /2; // NaN
let nan_Num2 =  NaN + 1; // NaN
let nan_Num_Type = typeof NaN; // number
let nan_Num_Type2 = typeof (NaN +'1') // string ('NaN1')
// console.log(NaN **2 );  // NaN
// console.log(NaN **0 ); // 1
// console.log(NaN === NaN); // false
isNaN(NaN); // true


// 
let infinity_Num = Infinity;  // Infinity
let infinity_Num_Type = typeof Infinity;  // number



//  BigInt

// In JavaScript, the “number” type cannot safely represent integer values larger than 
// ((2**53)-1) (that’s 9007199254740991), 
// or less than -((2**53)-1) for negatives.

//  test why we use this maximum or minimum number

// console.log(9007199254740991 + 1); // 9007199254740992
// console.log(9007199254740991 + 2); // 9007199254740992

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567891n;
// console.log(bigInt-1n);


// So, if there’s a NaN somewhere in a 
// mathematical expression, it propagates to the 
// whole result (there’s only one exception to that: 
// NaN ** 0 is 1).



//  3. String

let single_q = 'Hello'; // single quotes
let double_q = "Hello"; // double quotes
let backtick = `hello ${single_q}` // to pass variable and also work without it
let stingobj = String('');


// let single_q_1 = 'Hello she is gaurav\'s anuty';
// let single_q_1 = `Hello she is gaurav's anuty`;
let single_q_1 = "Hello she is gaurav's anuty";
// console.log(single_q_1);

//  
const arr = [1,2,3,4];
arr[0] = 55;
// console.log(arr);
let str = 'hello';
str = 'MyName'; // garbage collection is happen and assign this value
str[0] = 'j' // is immutable 
// console.log(str);
// 1.  number +string or string +string -> number
// 2. other opertions -> number


// boolean

// let bool = Boolean(true);
// let bool = true;
// let bool = false;
//  comparsion opertor value is bool;  === ,== , > , < , <= ,>=
// console.log(bool);
// console.log(typeof Boolean(true)); //boolean


// null

let isNull = null;

// console.log(isNull);
// console.log(typeof isNull); // object

// isNull()

//undefined
// let isUn = undefined ; 
let isUn;
console.log(typeof isUn);


//Symbol

let sys = Symbol('Hello')
// console.log(sys , typeof sys);