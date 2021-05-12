const AccessDeniedException = require('../src/accessdeniedexception');

const assert = require('assert/strict')

// 因为 Exception 包没有业务逻辑，这里仅作一个最基本的测试

describe('Exception Test', ()=>{

    function foo() {
        let e = new TypeError();
        throw new AccessDeniedException('foobar', e, 'EACCES');
    }

    it('Test AccessDeniedException', ()=>{
        try {
            foo();
            assert.fail();

        }catch(e) {
            assert(e instanceof AccessDeniedException);
            assert.equal(e.message, 'foobar');
            assert(e.cause instanceof TypeError);
            assert.equal(e.code, 'EACCES');
        }
    });

});

