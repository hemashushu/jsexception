const RuntimeException = require('./runtimeexception');

class IllegalArgumentException extends RuntimeException {
	constructor(message = 'Illegal Argument.', cause) {
		super(message, cause);
	}
}

module.exports = IllegalArgumentException;