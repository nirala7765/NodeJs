const express = require('express');


const app = express();

app.get('/',(req,res)=>{
    res.send({Message:"Welcome to Node Project setup"})

})

app.listen(4000,()=>{
    console.log("Server listning on Port 40000");
})