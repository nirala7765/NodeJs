const players = require('../Models/Player_Models');
const player = require('../Models/Player_Models');

const addplayerService = (player)=>{
    players.push(player);
    return;

}

const updatePlayerService = (player)=>{};

const deletePlayerService = (player)=>{};


module.exports={
    addplayerService,
    updatePlayerService,
    deletePlayerService


}