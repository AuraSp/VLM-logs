'use strict'

const info = (message) => {
    if (message) {
        console.info(`\u001b[1;34m [INFO]  | ${message}`)
    } else {
        console.info(`\u001b[1;34m [INFO]  | ${message}`)
    }
};


const warn = (message) => {
    if (message) {
        console.warn(`\u001b[1;33m [WARN]  | ${message}`)
    } else {
        console.warn(`\u001b[1;33m [WARN]  | ${message}`)
    }
};


const error = (message) => {
    if (message) {
        console.error(`\u001b[1;31m [ERROR] | ${message}`)
    } else {
        console.error(`\u001b[1;31m [ERROR] | ${message}`)
    }
};

const fatal = (message) => {
    if (message) {
        console.error(`\u001b[1;35m [FATAL] | ${message}`)
    } else {
        console.error(`\u001b[1;35m [FATAL] | ${message}`)
    }
};

const debug = (message) => {
    if (message) {
        console.debug(`\u001b[1;32m [DEBUG] | ${message}`)
    } else {
        console.debug(`\u001b[1;32m [DEBUG] | ${message}`)
    }
};


module.exports = [
    info,
    warn,
    error,
    fatal,
    debug
]