/**
 * Created by Tracy on 10/29/2015.
 */

var Jungle = function () {
  this.animals = [];
  this.soundOff  = function () {
    animalCount = 0;
    this.animals.forEach(function (animal){
      animalCount ++;
      animal.energyLevel += animal.soundIncrement;
      console.log(animal.animalType, ' HERE!');
    });
    return animalCount;
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

function Animal() {
  this.animalType = '';
  this.energyLevel = 0;
  this.soundIncrement = 3;
  this.eatIncrement = 5;
  this.sleepIncrement = 10;
  this.speciesCount = 0;
}

Animal.prototype.makeSound = function () {
  console.log (this.animalType, 'HERE');
};
Animal.prototype.eat = function (food) {
  if (!this.badFood || food !== this.badFood) {
    this.energyLevel += this.eatIncrement;
    console.log(this.animalType, 'YUM!');
  }
  else {
    console.log(this.animalType, 'BARF!');
  }
};
Animal.prototype.sleep = function () {
  this.energyLevel += this.sleepIncrement;
};

Jungle.prototype.addAnimal = function (sAnimalType) {
  var animal = new Animal();
  var animalDef = animalDefs[sAnimalType];
  animal = mergeObj(animal,animalDef);
  this.animals.push(animal);
  return animal;
};

Jungle.prototype.feedAnimals = function (sAnimalType, sFood) {
  var animalTmp;
  this.animals.forEach(function (animal) {
    if (animal.animalType === sAnimalType) {
      animal.eat(sFood);
    }
  })
};

function mergeObj(proto, oExtension) {
  var constructor = function () {};
  constructor.prototype = proto;
  Object.keys(oExtension)
    .forEach(function (propName) {
      constructor.prototype[propName] = oExtension[propName];
    });
  return new constructor();
}

module.exports = Jungle;