const Exception = require('./src/exception');

const DataFormatException = require('./src/dataformatexception');
const ParseException = require('./src/parseexception');

const RuntimeException = require('./src/runtimeexception');
const ArithmeticException = require('./src/arithmeticexception');
const IllegalArgumentException = require('./src/illegalargumentexception');
const IndexOutOfBoundsException = require('./src/indexoutofboundsexception');
const NullPointerException = require('./src/nullpointerexception');

const IOException = require('./src/ioexception');
const FileNotFoundException = require('./src/filenotfoundexception');

const FileSystemException = require('./src/filesystemexception');
const AccessDeniedException = require('./src/accessdeniedexception');
const DirectoryNotEmptyException = require('./src/directorynotemptyexception');
const FileAlreadyExistsException = require('./src/filealreadyexistsexception');
const NotDirectoryException = require('./src/notdirectoryexception');

module.exports = {
    Exception: Exception,
    DataFormatException: DataFormatException,
    ParseException: ParseException,
    RuntimeException: RuntimeException,
    ArithmeticException: ArithmeticException,
    IllegalArgumentException: IllegalArgumentException,
    IndexOutOfBoundsException: IndexOutOfBoundsException,
    NullPointerException: NullPointerException,
    IOException: IOException,
    FileNotFoundException: FileNotFoundException,
    FileSystemException: FileSystemException,
    AccessDeniedException: AccessDeniedException,
    DirectoryNotEmptyException: DirectoryNotEmptyException,
    FileAlreadyExistsException: FileAlreadyExistsException,
    NotDirectoryException: NotDirectoryException
};
