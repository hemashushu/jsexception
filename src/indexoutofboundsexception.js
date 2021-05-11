const RuntimeException = require('./runtimeexception');

class IndexOutOfBoundsException extends RuntimeException {
    constructor(message, cause) {
        super(message, cause);
    }
}

module.exports = IndexOutOfBoundsException;