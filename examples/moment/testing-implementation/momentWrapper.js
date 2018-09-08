const moment = require('moment')

const momentWrapper = module.exports = {}

momentWrapper.addWeek = (timestamp) => {
  return moment(timestamp).add(1, 'week').format('YYYY-MM-DD')
}
