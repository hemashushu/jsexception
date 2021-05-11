const RuntimeException = require('./runtimeexception');

// e.g. an integer "divide by zero"
class ArithmeticException extends RuntimeException {
    constructor(message, cause) {
        super(message, cause);
    }
}

module.exports = ArithmeticException;