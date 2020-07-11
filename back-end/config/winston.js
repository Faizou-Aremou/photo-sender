const appRoot = require('app-root-path');
const winston = require('winston');
/**
 * Configuration of winston
 * https://www.codeflow.site/fr/article/how-to-use-winston-to-log-node-js-applications
 */
// specifications of logs objets
const options = {
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
const logger = winston.createLogger({
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