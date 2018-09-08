const moduleB = require('./moduleB')
const momentWrapper = require('./momentWrapper')

const moduleA = module.exports = {}

moduleA.execute = (date) => {
  // do some complex stuff
  const dateAfterOneWeek = momentWrapper.addWeek(date)
  // some more domain logic goes here..
  moduleB.sendRequest(dateAfterOneWeek)
}
