const FileSystemException = require('./filesystemexception');

class IsDirectoryException extends FileSystemException {
    constructor(message, cause, code = 'EISDIR') {
        super(message, cause, code);
    }
}

module.exports = IsDirectoryException;