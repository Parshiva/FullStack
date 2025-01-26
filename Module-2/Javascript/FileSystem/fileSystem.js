let fs = require("fs");

console.log("Before Reading the File");

const buffer = fs.readFileSync("./file.txt");
console.log(buffer.toString());
console.log("After Reading the File");