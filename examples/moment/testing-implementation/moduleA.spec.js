const moduleA = require('./moduleA')
const momentWrapper = require('./momentWrapper')
const moduleB = require('./moduleB')

describe('module A', () => {
  afterEach(() => sandbox.restore())

  context('when in some context ..', () => {
    beforeEach(() => {
      sandbox.stub(momentWrapper, 'addWeek').returns('updated date')
      sandbox.stub(moduleB, 'sendRequest')
      moduleA.execute('2018-09-13')
    })

    it('sends a request with the udpated date', () => {
      expect(moduleB.sendRequest).to.have.been.calledWith('updated date')
    })
  })
})
