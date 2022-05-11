const repository = require('../repositories/jogadorRepository')

const readJogador = async () => {
  const jogadoresResponse = await repository.findJogador()

  const response = jogadoresResponse.map(calculateMedalsAndTrophies)

  return response
}

const calculateMedalsAndTrophies = (jogador) => {
  const { coins } = jogador;
  const medals = parseInt(coins / 10);
  const trophies = parseInt(coins / 3);
  return {
    ...jogador,
    medals,
    trophies
  }
}

module.exports = {
  readJogador
}
