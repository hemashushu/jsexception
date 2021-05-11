const RuntimeException = require('./runtimeexception');

class IllegalArgumentException extends RuntimeException {
	constructor(message = 'Illegal Argument.') {
		super(message);
	}
}

module.exports = IllegalArgumentException;