const Exception = require('./exception');

// some data can not be processed (e.g. decompress some data)
class DataFormatException extends Exception {
    constructor(message, cause) {
        super(message, cause);
    }
}

module.exports = DataFormatException;