const FileSystemException = require('./filesystemexception');

class DirectoryNotEmptyException extends FileSystemException {
    constructor(message, cause, code = 'ENOTEMPTY') {
        super(message, cause, code);
    }
}

module.exports = DirectoryNotEmptyException;