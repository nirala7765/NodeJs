const express = require('express');

const PlayerRouter  = require('./Src/Routes/Player_Route');

const app = express();
app.use(express.json());

app.use(PlayerRouter);






app.listen(3000,()=>{
    console.log("listening on port 3000...");
})