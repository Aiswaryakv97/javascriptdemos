const assert = require('chai').assert;
const exp = require('chai').expect;
const should = require('chai').should;


describe('User Test suite-Registration',()=>
{
    var status = true;
    var statusFail = false;

    it('Registration -validation success',()=>
    {
        assert.equal(status, true);

    })

    it('Registration -validation failure',()=>
    {
        assert.notEqual(statusFail, true);
        
    })
})

describe('User Test suite-Login',()=>
{
   
    var actualID = "1001";
    id =1001;

    it('Login success',()=>
    {
        var expectedID = "1001";
        assert.equal(actualID,expectedID);

    })

    it('Login failure',()=>
    {
       
       id.should.not.equal(1001);

     

      assert.notEqual(actualID,"1001");
        
    })
})