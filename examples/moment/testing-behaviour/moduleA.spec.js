const moduleA = require('./moduleA')
const momentWrapper = require('./momentWrapper')
const moduleB = require('./moduleB')

describe('module A', () => {
  let clock

  afterEach(() => sandbox.restore())

  context('when in some context ..', () => {
    beforeEach(() => {
      clock = sandbox.useFakeTimers(new Date(2018, 9 - 1, 13)) // 2018-09-13
      sandbox.stub(moduleB, 'sendRequest')
      moduleA.execute('2018-09-13')
    })

    it('sends a request with the udpated date', () => {
      expect(moduleB.sendRequest).to.have.been.calledWith('2018-09-20')
    })
  })
})
