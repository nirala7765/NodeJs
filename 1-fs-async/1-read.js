const fs = require('fs');


console.log('start..');
fs.readFile("record.txt","utf-8",function(err, data){
    if(err){
        console.log(err);

        
    }

    console.log(data);
})



console.log('stop..');