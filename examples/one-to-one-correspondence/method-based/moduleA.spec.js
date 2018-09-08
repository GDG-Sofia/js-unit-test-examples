const moduleA = require('./moduleA')

describe('module A', () => {
  afterEach(() => sandbox.restore())

  describe('filter', () => {
    beforeEach(() => {
      sandbox.stub(moduleA, '_filterByColor').withArgs('products', 'red').returns('filtered by color')
      sandbox.stub(moduleA, '_filterBySize').withArgs('filtered by color', 10).returns('filtered by size')
      sandbox.stub(moduleA, '_filterByPrice').withArgs('filtered by size', 1000).returns('filtered by price')
      sandbox.stub(moduleA, '_filterByManufacturer').withArgs('filtered by price', 'manufacturer 1').returns('filtered by manufacturer')
      sandbox.stub(moduleA, '_filterByRating').withArgs('filtered by manufacturer', 2).returns('filtered products')
    })

    it('returns the filtered products', () => {
      const filterOptions = {
        color: 'red',
        size: 10,
        price: 1000,
        manufacturer: 'manufacturer 1',
        rating: 2
      }
      expect(moduleA.filter('products', filterOptions)).to.equal('filtered products')
    })
  })

  describe('_filterByColor', () => {
    it('filters by color', () => {
      const products = [
        { id: 1, color: 'red' },
        { id: 2, color: 'blue' }
      ]
      expect(moduleA._filterByColor(products, 'red')).to.deep.equal([
        { id: 1, color: 'red' }
      ])
    })
  })

  describe('_filterBySize', () => {
    // ..
  })

  describe('_filterByManufacturer', () => {
    // ..
  })

  describe('_filterByRating', () => {
    // ..
  })
})
