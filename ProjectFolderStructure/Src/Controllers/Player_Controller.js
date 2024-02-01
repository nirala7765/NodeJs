
const players = require('../Models/Player_Models');

const { addplayerService } = require('../Services/Player_Services');


function getAllPlayers(req,res){
    return res.json({Responses: players})

}

function getPlayerById(req,res){
    return res.json({Message: ' Palyer Coming From Request-2 using Player Id'})

}
function AddPlayer(req,res){

    const player = req.body;

    addplayerService(player);

    return res.json({Message: ' Palyer Added Successfully'})

}

function UpdatePlayers(req,res){
    return res.json({Message: 'Player Info updated from Request-3'})

}
function DeletePlayers(req,res){
    return res.json({Message: 'Player Deleted from Request-4'})

}




module.exports = {
    getAllPlayers,
    getPlayerById,
    UpdatePlayers,
    AddPlayer, 
    DeletePlayers
}