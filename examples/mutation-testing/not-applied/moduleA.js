const moduleB = require('./moduleB')

const moduleA = module.exports = {}

moduleA.execute = (param) => {
  if (param === 'foo') {
    moduleB.sendRequest('foo')
  }
  moduleB.sendRequest('bar')
}
