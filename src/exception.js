// The JavaScript bulitin errors.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

class Exception extends Error {
	constructor(message, cause) {
		super(message);

        this.cause = cause; // the original Error object if present.
	}
}

module.exports = Exception;