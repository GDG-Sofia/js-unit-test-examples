const counter = module.exports = {}

counter._count = 0

counter.increment = () => {
  counter._count += 1
}

counter.count = () => {
  return counter._count
}
