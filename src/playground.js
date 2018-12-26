const maxRuns = 1000;
let numRuns = 0;

exports.printDateTimes = (logger) => {
    while (true) {
        if (numRuns > maxRuns) {
            logger.info({ runs: numRuns }, 'Max runs reached; terminating');
            return;
        }

        const curTime = Date.now();
        if (curTime % 5000 === 0) {
            numRuns += 1;
            logger.info({ numRuns, currentTime: curTime}, 'current datetime');
        }
    }
}
