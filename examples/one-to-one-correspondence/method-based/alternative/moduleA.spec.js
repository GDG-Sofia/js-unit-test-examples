const moduleA = require('./moduleA')

describe('module A', () => {
  afterEach(() => sandbox.restore())

  describe('filter', () => {
    it('filters products by color', () => {
      const filterOptions = {
        color: 'red'
      }
      const products = [
        { id: 1, color: 'red' },
        { id: 2, color: 'blue' }
      ]
      const filtered = moduleA.filter(products, filterOptions)
      expect(filtered.length).to.equal(1)
      expect(filtered[0].id).to.equal(1)
      expect(filtered[0].color).to.equal('red')
    })

    it('filters products by size', () => {
      const filterOptions = {
        size: 10,
      }
      const products = [
        { id: 1, size: 10 },
        { id: 2, size: 20 }
      ]
      const filtered = moduleA.filter(products, filterOptions)
      expect(filtered.length).to.equal(1)
      expect(filtered[0].id).to.equal(1)
      expect(filtered[0].size).to.equal(10)
    })
  })
})
