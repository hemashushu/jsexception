const IOException = require('./ioexception');

class FileNotFoundException extends IOException {
    constructor(message, cause, code = 'ENOENT') {
        super(message, cause, code);
    }
}

module.exports = FileNotFoundException;