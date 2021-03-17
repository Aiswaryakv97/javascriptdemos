const {expect} = require('chai');
const chai = require('chai');

describe('Demo TestSuites',()=>
{
    var models =['India','USA','Japan','UK'];

    var counter =0;

    before(()=>
    {
        console.log('Begining of all the test cases');
    })

    beforeEach(()=>
    {
        console.log('Begining of each test case');

    })

    it('Checking the number of countries',()=>
    {
        expect(models.length).to.be.equal(4);
    })
    it('Checking the keys of any array',()=>
    {
        expect({a:1,b:2}).to.have.all.keys('a','b');
    })

    it('Checking the order/sorting of countries',()=>
    {
        expect(models).to.have.ordered.members(['India','USA','Japan','UK']);

    })

    afterEach(()=>
    {
        console.log('after every test case');
    })

    
    after(()=>
    {
        console.log('after all test cases');
    })
})