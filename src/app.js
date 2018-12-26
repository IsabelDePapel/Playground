const bunyan = require('bunyan');
const logger = bunyan.createLogger({ name: 'isabel_test'});

const playground = require('./playground');

playground.printDateTimes(logger);