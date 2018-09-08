const moduleA = require('./moduleA')
const moduleB = require('./moduleB')

describe('moduleA', () => {
  afterEach(() => sandbox.restore())

  beforeEach(() => {
    sandbox.stub(moduleB, 'sendRequest')
  })

  describe('when executing foo', () => {
    beforeEach(() => {
      moduleA.execute('foo')
    })

    it('sends a request with foo', () => {
      expect(moduleB.sendRequest).to.have.been.called()
    })
  })

  describe('when just executing', () => {
    beforeEach(() => {
      moduleA.execute()
    })

    it('sends a request with bar', () => {
      expect(moduleB.sendRequest).to.have.been.called()
    })
  })
})
