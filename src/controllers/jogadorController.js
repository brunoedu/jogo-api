import jogadores from "../models/jogadorModel.js"
import { readJogador, deletarJogador } from "../services/jogadorService"

export const readJogador = async function readJogador(req, res){
    const jogadoresResponse = await readJogador()

    res.status(200).json(jogadoresResponse);
}

export const createJogador = async function cadastrarJogador(req, res){
    let jogador = new jogadores(req.body);
    jogador.save((err) => {
        if(err){
            res.send(`Houve um erro na criação do jogador! Erro:${err.message}`);
        }
        else{
            res.status(201).send('O jogador foi cadastrado com sucesso!');
        }
    })
}

export const updateJogador = (req, res) => {
    let id = req.params.id;

    jogadores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(err){
            res.send(`Houve um erro na hora de atualizar o jogador! Erro: ${err.message}`);
        }
        else{
            res.status(201).send('A atualização foi feita com sucesso!');
        }
    })
}

// export const deletarJogador = (req, res) => {
//     let id = req.params.id;

//         jogadores.findByIdAndDelete(id, (err) => {
//             if(err){
//                 res.send(`Houve um erro na hora de deletar o jogador! Erro: ${err.message}`);
//             }
//             else{
//                 res.status(201).send('O jogador foi deletado com sucesso!');
//             }
//         })
// }

export const deletarJogador = async (req, res) => {
    const id = req.params.id

    try {
        await deletarJogador(id)
        res.status(201).send('O jogador foi deletado com sucesso!')
    } catch (error) {
        res.send(`Houve um erro na hora de deletar o jogador! Erro: ${error.message}`)
    }
}