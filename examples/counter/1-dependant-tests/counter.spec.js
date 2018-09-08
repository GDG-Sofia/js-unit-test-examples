const counter = require('./counter')

describe('counter', () => {
  describe('increment', () => {
    context('when called once', () => {
      beforeEach(() => {
        counter.increment()
      })
      it('increments the count with 1', () => {
        expect(counter.count()).to.equal(1)
      })
    })
    context('when called twice', () => {
      beforeEach(() => {
        // count is already 1 from the previous test
        counter.increment()
        counter.increment()
      })
      it('increments the count with 2 (fails because count is 3)', () => {
        expect(counter.count()).to.equal(2) // fails because count is 3
      })
    })
  })
})
