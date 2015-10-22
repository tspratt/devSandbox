"use strict";

var Jungle = function () {
  this.animals = [];
  this.soundOff  = function () {
    for (var i = 0; i < this.animals.length; i++) {
      var animal = this.animals[i];
      console.log(animal.animalType, ' HERE!')
      animal.energyLevel += animal.soundIncrement;
    }
    return i;
  }
};

var animalDefs = {
  monkey: {
    foods: ['grain', 'fish', 'bugs'],
    soundIncrement: -4,
    eatIncrement: 2,
    play: function () {
      console.log('Monkey Ooooo Ooooo Oooo');
      this.energyLevel += -8;
    }
  },
  tiger: {
    foods: ['meat', 'fish'],
    sleepIncrement: 5
  },
  snake: {
    foods: ['grain', 'meat', 'fish', 'bugs'],
    energyLevel: 0
  }
};

function Animal(animalType) {
  var animal = new Object();

  animal.animalType = animalType;
  animal.energyLevel = 0;
  animal.soundIncrement = 3;
  animal.eatIncrement = 5;
  animal.sleepIncrement = 10;
  animal.speciesCount = 0;

  animal.eat = function (food) {
    var yum = false;
    var goodFood;
    for (var i = 0; i < this.foods.length; i++) {
      goodFood = this.foods[i];
      if (goodFood === food) {
        yum = true;
        break;
      }
    }
    if (yum) {
      console.log(this.animalType + ' yum!');
      this.energyLevel += this.eatIncrement;
    }
  };
  animal.sleep = function () {
     this.energyLevel += this.sleepIncrement;
  };

  var animalDef = animalDefs[animalType];
  for (var prop in animalDef) {
    if (animalDef.hasOwnProperty(prop)) {
      animal[prop] = animalDef[prop];
    }
  }
  return animal;
}

Jungle.prototype.addAnimal = function (animalType) {
  var animal = new Animal(animalType);
  this.animals.push(animal);
};

Jungle.prototype.feedAnimals = function (animalType, food) {
  for (var i = 0; i < this.animals.length; i++) {
    this.animals[i].eat(food);
  }
};

module.exports = Jungle;