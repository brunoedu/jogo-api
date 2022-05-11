import { service as jogadorService } from '../jogador'
export const initialize = async () => {
  const jogador = await jogadorService.findJogador()
  jogador.initilize()
  return { jogador }
}