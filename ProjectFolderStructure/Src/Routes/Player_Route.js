const express = require('express');

const {    
    getAllPlayers,
    getPlayerById,
    UpdatePlayers,
    AddPlayer,
    DeletePlayers
} = require('../Controllers/Player_Controller');



const PlayerRouter = express.Router();

// PlayerRouter.get('/players',(req,res)=>{
//     res.json({Message:'Players Coming'});
// })


// get all players

PlayerRouter.get('/players',getAllPlayers);


PlayerRouter.post('/players',AddPlayer);

PlayerRouter.put('/players/:id',UpdatePlayers);

PlayerRouter.delete('/players/:id',DeletePlayers);



module.exports = PlayerRouter; 