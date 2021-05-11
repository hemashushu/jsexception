const Exception = require('./exception');

// e.g.
// parsing an integer from string, or
// parsing an object from JSON string etc.

class ParseException extends Exception {
    constructor(message, cause) {
        super(message, cause);
    }
}

module.exports = ParseException;