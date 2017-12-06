const logger = require('../lib/logger')
const portNum = 8080;
logger.info('Starting server...')
require('../../server/main').listen(portNum, () => {
  logger.success('Server is running at http://localhost:'+portNum)
})