const counter = module.exports = {}

let count = 0

counter.increment = () => {
  count += 1
}

counter.reset = () => {
  count = 0
}

counter.count = () => {
  return count
}
