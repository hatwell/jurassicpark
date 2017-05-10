var assert = require('assert');
var Dinosaur = require('../dinosaur.js');
var Park = require('../park.js');

beforeEach(function(){
  dinosaur = new Dinosaur("stegosaur", 2);
});

describe('Dinosaur', function(){

it('dinosaur has type', function(){
  assert.equal('stegosaur', dinosaur.getType());
});

it('dinosaur has offspring', function(){
  assert.equal(2, dinosaur.getOffspringPerYear());
});

})
