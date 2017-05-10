var Park = require('./park.js')

var Dinosaur = function(type, offspringPerYear){
  this.type = type;
  this.offspringPerYear = offspringPerYear;
}


Dinosaur.prototype = {
  getType: function(){
    return this.type;
  },
  getOffspringPerYear: function(){
    return this.offspringPerYear;
  }
};

module.exports = Dinosaur;
