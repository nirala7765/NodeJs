const fs = require("fs");

fs.appendFile("record.txt","appending in record files",(err)=>{
    if(err){
        console.log(err);
    }
})