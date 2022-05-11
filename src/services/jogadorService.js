import { findJogador, deleteJogador } from '../repositories/jogadorRepository'

export const readJogador = async () => {
  const jogadoresResponse = await findJogador()

  const response = jogadoresResponse.map(calculateMedalsAndTrophies)

  // jogadoresResponse.forEach(jogador => {
  //     const moedas = jogador.coins;
  //     let medalhas = parseInt(moedas / 10);
  //     let trofeus = parseInt(medalhas / 3);

  //     jogador.medals = medalhas;
  //     jogador.trophies = trofeus;
  // })

  return response
}

export const deletarJogador = async (id) => {
  return deleteJogador(id)
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
