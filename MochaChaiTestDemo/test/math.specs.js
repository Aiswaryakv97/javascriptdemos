const add = require('../addition.js');
const multiply = require('../multiply.js')
var exp = require('chai').expect;

describe('This is the add test',()=>
{
    it('Must add two values and give result', ()=>
    {
        exp(add(2,3)).to.be.equal(5);
    })
})


describe('This is the multiple test',()=>
{
    it('Must multiply two values and give result', ()=>
    {
        exp(multiply(2,3)).to.be.equal(6);
    })
})