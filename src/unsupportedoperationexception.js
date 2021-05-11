class UnsupportedOperationException extends RuntimeException {
    constructor(message, cause) {
        super(message, cause);
    }
}

module.exports = UnsupportedOperationException;