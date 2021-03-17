var should = require('chai').should(),actualID =1001;

describe('Should demo',()=>
{
    it('must be should',()=>
    {
        actualID.should.not.be.a('string');
        actualID.should.equal(1001);
        actualID.should.not.equal(1001);
        })
})
