const FileSystemException = require('./filesystemexception');

class AccessDeniedException extends FileSystemException {
    constructor(message, cause, code = 'EPERM') {
        super(message, cause, code);

        // 'EPERM' 为更一般的权限异常，即 “禁止做...或者无法做...”
        // 比如中止一个不属于自己的进程，rm/rmdir 等。
        //
        // 'EACCES' 为比如文件路径无权访问所引起的异常。
        //
        // 可根据需要传入不同的 "code"
    }
}

module.exports = AccessDeniedException;