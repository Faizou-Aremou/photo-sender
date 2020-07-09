const appRoot = require('app-root-path');
const winston = require('winston');


var options = {
    file: {
        level: 'info',
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, //5MB
        maxFiles: 5,
        colorize: false
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true
    }
}
// instantiate a new winston logger with the settings defined above
const logger = new winston.logger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    exitOnError: false // do not exit on handled exceptions
})
// create a stream object with a write function that will be used by morgan
logger.stream = {
    write: (message, encoding) => {
        logger.info(message);
    }

}

module.exports = logger;