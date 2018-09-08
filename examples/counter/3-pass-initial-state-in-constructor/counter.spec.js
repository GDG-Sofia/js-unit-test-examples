const Counter = require('./counter')

describe('counter', () => {
  let counter

  describe('increment', () => {
    context('when called once', () => {
      beforeEach(() => {
        counter = new Counter()
        counter.increment()
      })
      it('increments the count with 1', () => {
        expect(counter.count()).to.equal(1)
      })
    })
    context('when called twice', () => {
      beforeEach(() => {
        counter = new Counter()
        counter.increment()
        counter.increment()
      })
      it('increments the count with 2', () => {
        expect(counter.count()).to.equal(2)
      })
    })
  })
})
