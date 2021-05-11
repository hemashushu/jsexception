const FileSystemException = require('./filesystemexception');

class FileAlreadyExistsException extends FileSystemException {
    constructor(message, cause, code = 'EEXIST') {
        super(message, cause, code);
    }
}

module.exports = FileAlreadyExistsException;