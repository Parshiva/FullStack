'use strict'

let object ={name : "shiva"};
console.log(object);

Object.defineProperty(object,"name",{value:"parshi",writable:false});

console.log(object);

// Create an Object:
let person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
  };
  
  // Add a new Property
  Object.defineProperty(person, "year", {value:"2008"})

  console.log(person)

  const numArray =[1,2,3,4,5];

  numArray.push(10)
  console.log(numArray)

  numArray=[1,2,4,5]; //not allowed for the const 

//   const x=100;
//   console.log('x-->',x)

//     x=200;
//   console.log('x-->',x)