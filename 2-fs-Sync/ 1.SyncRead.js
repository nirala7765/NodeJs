const fs = require('fs');

console.log("Start................................................................")

 const data = fs.readFileSync("newRecord.txt","utf-8");
console.log(data)


console.log("Stop................................................................")
