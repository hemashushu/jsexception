const IOException = require('./ioexception');

class FileSystemException extends IOException {
    constructor(message, cause, code) {
        super(message, cause, code);
    }
}

module.exports = FileSystemException;