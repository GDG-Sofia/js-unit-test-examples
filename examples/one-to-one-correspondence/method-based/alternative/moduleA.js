const moduleA = module.exports = {}

moduleA.filter = (products, filterOptions) => {
  const { color, size, price, manufacturer, rating } = filterOptions
  return (
    products
      .filter(byColor(color))
      .filter(bySize(size))
  )
}

const byColor = color => product => {
  return product.color === color
}

const bySize = size => product => {
  return product.size === size
}
