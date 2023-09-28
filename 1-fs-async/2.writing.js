const fs = require('fs');

fs.writeFile("record.txt","record is going to be over write with this contents",(err)=>{
    if(err){
        console.log(err);
    }
    
})