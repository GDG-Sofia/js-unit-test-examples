const moment = require('moment')
const momentWrapper = require('./momentWrapper')

describe('momentWrapper', () => {
  afterEach(() => sandbox.restore())

  describe('addWeek', () => {
    let originalMomentProto

    beforeEach(() => {
      originalMomentProto = moment.fn
      sandbox.stub(moment.fn, 'add').withArgs(1, 'week').returns({
        format: sandbox.stub().returns('updated date after 1 week')
      })
    })

    afterEach(() => {
      moment.fn = originalMomentProto
    })

    it('returns the updated date which is 1 week in the future', () => {
      expect(momentWrapper.addWeek('2018-09-13'))
        .to.equal('updated date after 1 week')
    })
  })
})
