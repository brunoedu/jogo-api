const jogadores = require("../models/jogadorModel")

const findJogador = async () => {
  return jogadores.find().lean()
}

const deleteJogador = async (id) => {
  return jogadores.findByIdAndDelete(id)
}

module.exports = {
  findJogador,
  deleteJogador
}