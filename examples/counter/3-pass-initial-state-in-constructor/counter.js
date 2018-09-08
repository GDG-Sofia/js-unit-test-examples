class Counter {
  constructor (count) {
    this._count = count || 0
  }

  increment () {
    this._count += 1
  }

  count () {
    return this._count
  }
}

module.exports = Counter
