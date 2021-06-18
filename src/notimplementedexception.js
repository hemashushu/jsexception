const UnsupportedOperationException = require('./unsupportedoperationexception');

class NotImplementedException extends UnsupportedOperationException {
    constructor(message, cause) {
        super(message, cause);
    }
}

module.exports = NotImplementedException;