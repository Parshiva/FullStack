const fs=require("fs");

const promise = fs.promises.readFile('./file1.txt');

console.log(promise);

promise.then((data)=>{console.log("data -- >" , data.toString());})
       .catch((err)=>{console.log("Error -- >", err.toString());})
       .finally(()=>{console.log("This gets executed always")});

console.log(promise);