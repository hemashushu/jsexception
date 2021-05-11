const RuntimeException = require('./runtimeexception');

// accessing a null or undefined object.
class NullPointerException extends RuntimeException {
    constructor(message, cause) {
        super(message, cause);
    }
}

module.exports = NullPointerException;