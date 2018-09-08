const counter = require('./counter')

describe('counter', () => {
  describe('increment', () => {
    context('when called once', () => {
      beforeEach(() => {
        counter._count = 0
        counter.increment()
      })
      it('increments the count with 1', () => {
        expect(counter.count()).to.equal(1)
      })
    })
    context('when called twice', () => {
      beforeEach(() => {
        counter._count = 0
        counter.increment()
        counter.increment()
      })
      it('increments the count with 2', () => {
        expect(counter.count()).to.equal(2)
      })
    })
  })
})
