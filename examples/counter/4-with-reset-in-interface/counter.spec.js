const counter = require('./counter')

describe('counter', () => {
  describe('reset', () => {
    context('when called once', () => {
      beforeEach(() => {
        counter.reset()
      })
      it('resets to 0', () => {
        expect(counter.count()).to.equal(0)
      })
    })

    context('when called after an increment', () => {
      beforeEach(() => {
        counter.increment()
        counter.reset()
      })
      it('resets to 0', () => {
        expect(counter.count()).to.equal(0)
      })
    })
  })
  describe('increment', () => {
    context('when called once', () => {
      beforeEach(() => {
        counter.reset()
        counter.increment()
      })
      it('increments the count with 1', () => {
        expect(counter.count()).to.equal(1)
      })
    })
    context('when called twice', () => {
      beforeEach(() => {
        counter.reset()
        counter.increment()
        counter.increment()
      })
      it('increments the count with 2', () => {
        expect(counter.count()).to.equal(2)
      })
    })
  })
})
