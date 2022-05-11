const mongoose = require("mongoose");

const jogadorSchema = new mongoose.Schema(
    {
        name: {type:String, required:true},
        coins: {type:Number, required:true}
    },
    {
        versionKey:false
    }
);

const jogadores = mongoose.model("jogadores", jogadorSchema);
module.exports = jogadores;