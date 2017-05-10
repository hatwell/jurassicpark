var Dinosaur = require('./dinosaur.js');

var Park = function(){
  this.dinosaurs = [];
}

Park.prototype = {
  getDinosaurs: function(){
    return this.dinosaurs;
  },
  addDinosaur: function(dinosaur){
    this.dinosaurs.push(dinosaur);
  },
  getNumberOfDinosaurs: function(){
    var allDinos = this.getDinosaurs();
    return allDinos.length;
  },

  removeAllDinosaursOfType: function(type){
    for (dino of this.dinosaurs) {
      if (dino.getType() === type){
        var index = this.dinosaurs.indexOf(dino);
        this.dinosaurs.splice(index, 1);
      }
    }
  },

  getAllDinosaursWithOffspringMoreThanTwo: function(){
    var fertileDinos = [];
    for (dino of this.dinosaurs) {
      if (dino.getOffspringPerYear() > 2){
        fertileDinos.push(dino);
      }
    }
    return fertileDinos;

  },

  getDinoTotalAsTimePasses: function(numberOfYears){
    var totalDinos = 0;
    for (var i = 0; i <= numberOfYears; i++) {
      for (dino in this.dinosaurs){
        var offspring = dino.getOffspringPerYear();
        totalDinos += offspring;
      }
    }
    totalDinos += this.getNumberOfDinosaurs();
    return totalDinos;
  }
}

module.exports = Park;
