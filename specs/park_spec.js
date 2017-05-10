var assert = require('assert');
var Dinosaur = require('../dinosaur.js');
var Park = require('../park.js');

beforeEach(function(){
    park = new Park();
    dinosaur = new Dinosaur("stegosaur", 2);
    dinosaur2 = new Dinosaur("big lad", 3);
})
  describe('Park', function(){

  it('can add to dinosaurs array', function(){
    park.addDinosaur(dinosaur);
    assert.equal(1, park.getNumberOfDinosaurs());
  });

  it('can remvove all dinosaurs of a type', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.removeAllDinosaursOfType("stegosaur");
    assert.equal(1, park.getNumberOfDinosaurs());
  });

  it('can identify dinos with lots of babies', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    assert.equal(1, park.getAllDinosaursWithOffspringMoreThanTwo().length);
  });

  it('can call offspring function in this test', function(){
    assert.equal(2, dinosaur.getOffspringPerYear());
  });


  it('can total dino babies after n years', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    assert.equal(7, park.getDinoTotalAsTimePasses(1));
  });


})
