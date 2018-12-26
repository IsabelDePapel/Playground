const bunyan = require*('bunyan');

const maxRuns = 1000;
let numRuns = 0;

exports.printDateTimes = () => {
    const logger = bunyan.createLogger({ name: 'isabel_test'});
    if (numRuns > maxRuns) {
        logger.info({ runs: numRuns }, 'Max runs reached; terminating');
        return;
    }

    while (true) {
        const curTime = Date.now();
        if (curTime % 5000 === 0) {
            logger.info({ currentTime: curTime}, 'current datetime');
        }
        numRuns += 1;
    }
}
