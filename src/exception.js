// The JavaScript bulitin errors.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

class Exception extends Error {
	constructor(message, cause) {
		super(message);

        // another exception which cause the current exception.
        // 通常用来记录异常链，即某个异常被另外一个异常对象所封装，
        // 随后新异常对象被抛出。
        // 在 JavaScript/Node.js 环境里，可以存放引起异常的
        // 原始的 Error 对象。
        this.cause = cause;
	}
}

module.exports = Exception;