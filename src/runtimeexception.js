const Exception = require('./exception');

class RuntimeException extends Exception {
    constructor(message, cause) {
        super(message, cause);
    }
}

module.exports = RuntimeException;