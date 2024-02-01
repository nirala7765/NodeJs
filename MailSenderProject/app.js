const express = require('express');

const app = express();

let port = 5000;

app.get('/',(req,res)=>{
    res.send('Welcome to Node Server!');
})

const start = async()=>{
    try{

        app.listen(port,()=>{
            console.log(`I am listening on ${port}`);
        })
        
    }catch(error){

        console.log(error)

    }
}


start();