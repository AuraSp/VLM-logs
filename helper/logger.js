const log4js = require('log4js');
const logger = log4js.getLogger();

log4js.configure({
    appenders: {
        file: {
            type: 'file',
            filename: 'logs/trace.log',
            layout: {
                type: 'pattern',
                pattern: '%n %d{D:yyyy-mm-dd T:hh.mm.ss} %p %m',
            },
            alwaysIncludePattern: true,
            maxLogSize: 1 * 1024,
            encoding: 'utf-8',
            extension: ".log",
        },
        console: {
            type: 'console',
            layout: {
                type: 'pattern',
                pattern: '%[ %m %]',
            },
            alwaysIncludePattern: true,
        },
    },
    categories: {
        default: { appenders: ['file', 'console'], level: 'trace' },
    },
});

module.exports = logger;