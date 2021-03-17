const exp = require('chai').expect;
var arrayDemo = require('../arrayDemo.js');
var assert = require('chai').assert;

//var myArray = require('../arrayDemo.js').arr1;

describe('Must be an array',()=>
{
    it('Has to be an array of string type',()=>
    {
        exp(arr1).to.be.an('Array');
       // assert.typeOf(arrayDemo.arr1, 'string'); 
      
       // assert.lengthOf(arr1,4);


    })
});

describe('Must be an array',()=>
{
    it('Has to be an array of string type',()=>
    {
       
       // assert.typeOf(arrayDemo.arr1, 'string'); 
       exp(arr1).to.be.an('Array').that.contains("a","b","c","d");  

            assert.lengthOf(arr1,4);
            assert.typeOf(arr1[0],'string');

            assert.typeOf(nomane,'string');


    })
})