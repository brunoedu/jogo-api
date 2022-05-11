const chai = require('chai'),
  expect = chai.expect,
  sinon = require('sinon')

  chai.should()

const repository = require('../repositories/jogadorRepository')
const service = require('./service')

describe('Jogador Service Spec', () => {
  const sandbox = sinon.createSandbox()

  afterEach(() => {
    sandbox.restore()
  })

  describe('readJogador', () => {
    it('dado que eu não tenha jogador no banco, quando eu chamar o método read jogador, deveria retornar array vazio', async () => {
      // ARRANGE
      // preparo o cenário e mocks de objetos 
      sandbox.stub(repository, 'findJogador').resolves([])

      // ACT
      // executo a função que quero testar read jogador
      const response = await service.readJogador()

      // ASSERT
      // verifico o resultado
      expect(response).to.be.equal([])
    })

    it('dado um jogador, quando eu chamar o método read jogador, deveria calcular corretamente as medals e trophies', async () => {
      // ARRANGE
      // preparo o cenário e mocks de objetos 
      const findJogadorStub = sandbox.stub(repository, 'findJogador').resolves([
        {
          _id: '1',
          name: 'Player test',
          coins: 35
        }
      ])

      // ACT
      // executo a função que quero testar read jogador
      const response = await service.readJogador()

      // ASSERT
      // verifico o resultado
      expect(findJogadorStub)
        .to
        .have
        .been
        .calledOnce
      expect(response).to.be.equal([
        {
          _id: '1',
          name: 'Player test',
          coins: 35,
          medals: 3,
          trophies: 1
        }
      ])
    })
  })
})