const sinon = require('sinon')

global.expect = require('chai')
  .use(require('dirty-chai'))
  .use(require('sinon-chai'))
  .expect

global.sandbox = sinon.createSandbox()
