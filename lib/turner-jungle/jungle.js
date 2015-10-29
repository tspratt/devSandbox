/**
 * Created by Tracy on 10/29/2015.
 */
'use strict';
var Jungle = function () {
  this.animals = [];
  this.soundOff = function () {
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
    animalType: 'monkey',
    soundIncrement: -4,
    eatIncrement: 2,
    play: function () {
      console.log('Monkey Ooooo Ooooo Oooo');
      this.energyLevel += -8;
    }
  },
  tiger: {
    animalType: 'tiger',
    badFood: 'grain',
    sleepIncrement: 5
  },
  snake: {
    animalType: 'snake',
    energyLevel: 0
  }
};

function Animal () {
  var animal = new Object();
  animal.animalType = '';
  animal.energyLevel = 0;
  animal.soundIncrement = 3;
  animal.eatIncrement = 5;
  animal.sleepIncrement = 10;
  animal.speciesCount = 0;

  animal.makeSound = function () {
    console.log(this.animalType, 'HERE');
  };
  animal.eat = function (food) {
    if (!this.badFood || food !== this.badFood) {
      this.energyLevel += this.eatIncrement;
    }
  };
  animal.sleep = function () {
    this.energyLevel += this.sleepIncrement;
  };
  return animal;
}

Jungle.prototype.addAnimal = function (sAnimalType) {
  var animal = new Animal();
  var animalDef = animalDefs[sAnimalType];
  animal = mergeObj(animal, animalDef);
  this.animals.push(animal);
  return animal;
};

Jungle.prototype.feedAnimals = function (sAnimalType, sFood) {
  var animalTmp;
  for (var i = 0; i < this.animals.length; i++) {
    animalTmp = this.animals[i];
    if (animalTmp.animalType === sAnimalType) {
      animalTmp.eat(sFood);
    }
  }
};

function mergeObj(proto, oExtension) {
  var constructor = function () {
  };
  constructor.prototype = proto;
  for (var propName in oExtension) {
    if (oExtension.hasOwnProperty(propName)) {
      constructor.prototype[propName] = oExtension[propName];
    }
  }
  return new constructor();
}

module.exports = Jungle;