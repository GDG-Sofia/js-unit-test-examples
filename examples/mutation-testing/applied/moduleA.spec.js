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
      expect(moduleB.sendRequest).to.have.been.calledOnce()
        .and.calledWithExactly('foo')
    })
  })

  describe('when just executing', () => {
    beforeEach(() => {
      moduleA.execute(null)
    })

    it('sends a request with bar', () => {
      expect(moduleB.sendRequest).to.have.been.calledOnce()
        .and.calledWithExactly('bar')
    })
  })
})
