const Exception = require('./exception');

class IOException extends Exception {
    constructor(message, cause, code = 'EIO') {
        super(message, cause);

        this.code = code; // such as 'ENOENT', 'ENOTDIR' code.
    }
}

module.exports = IOException;