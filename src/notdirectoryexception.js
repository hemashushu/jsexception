const FileSystemException = require('./filesystemexception');

class NotDirectoryException extends FileSystemException {
    constructor(message, cause, code = 'ENOTDIR') {
        super(message, cause, code);
    }
}

module.exports = NotDirectoryException;