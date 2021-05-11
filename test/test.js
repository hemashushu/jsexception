const AccessDeniedException = require('../src/accessdeniedexception');

const assert = require('assert/strict')

function foo() {
    let e = new TypeError();
    throw new AccessDeniedException('foobar', e, 'EACCES');
}

try {
    foo();
    assert.fail();
}catch(e) {
    assert(e instanceof AccessDeniedException);
    assert.equal(e.message, 'foobar');
    assert(e.cause instanceof TypeError);
    assert.equal(e.code, 'EACCES');

    console.log('test pass!');
}