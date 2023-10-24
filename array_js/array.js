// resiable and use multidata types in array as a value
// const arr = new Array(3);
// arr[5] = 100;
// arr[0] = 'string';

// console.log(arr);


// shallow and deep copy

// const arr = [1,2,3,['hello']];
// const shallow = [...arr];
// console.log({shallow,arr});
// arr[3] = ['Boy']
// arr[0] = 5000;
// console.log({shallow,arr});

//  === comparsion ==


// const arr1 = [1,2,3];
// const arr2 = [1,2,3];

//  arr1 address  --- >     memory  ([1,2,3])

// console.log(arr1 === arr2);  // false  -> because it store address inside it not directly array;


//  length

// const arr = [1,2,3];
// arr.length  // 3
// arr.push(66); // 4
// arr.length = 70 // 70  [1,2,3,66 , <66 empty items>]  
// arr.length = 0; // delete the items from array 

//  concat

//   return new array , new can add multiple array in concat(arr1,arr2, ... , arrn)
// const arr1 = [1,2,3];
// const arr2 = [10,11,{hello:'vikrant'}];
//  arr2 -> adresss -> memory ->  [10,11,address ->({hello:'vikrant'})]  
//  concat create a shallow copy
// const res = arr1.concat(arr2);
//  res  -> newaddress  ->  memory   ->  [1,2,3,10,11 ,address -> {hello:'vikrant'}]
// console.log(res,arr2);


// copyWithin
// * modify original array
// const arr = [1,2,3,4,5,6];

// console.log(arr.copyWithin(0,1,6));

// console.log(arr);


//  join 
// * convert it into one string
// * by default use 
// * return a string dont modify original array
// let arr = [1,2,3,4,5];
// const res = arr.join('');
// console.log(res); // '12345'


//  map 
// * cant modify original array iterator in array
// ? Add a index to its respective element
// const arr = [1,22,3,14,5]; 
// const newArray = arr.map((value,index,array)=> value +index);
// console.log(newArray);// [1,23,5,17,9]

//  Imp  -> map , filter and reducer 
// imp -> map vs foreach

// foreach , filter , reducer and complete other function


