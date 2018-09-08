const moduleA = module.exports = {}

moduleA.filter = (products, filterOptions) => {
  const { color, size, price, manufacturer, rating } = filterOptions
  const filteredByColor = moduleA._filterByColor(products, color)
  const filteredBySize = moduleA._filterBySize(filteredByColor, size)
  const filteredByPrice = moduleA._filterByPrice(filteredBySize, price)
  const filteredByManufacturer = (
    moduleA._filterByManufacturer(filteredByPrice, manufacturer)
  )
  return moduleA._filterByRating(filteredByManufacturer, rating)
}

moduleA._filterByColor = (products, color) => {
  return products.filter(p => p.color === color)
}

moduleA._filterBySize = (products, size) => {
  // ..
}

moduleA._filterByPrice = (products, price) => {
  // ..
}

moduleA._filterByManufacturer = (products, manufacturer) => {
  // ..
}

moduleA._filterByRating = (products, rating) => {
  // ..
}
