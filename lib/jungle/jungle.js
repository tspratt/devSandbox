/**
 * Created by Tracy on 10/14/2015.
 */
"use strict";
var util = require('util');

var Jungle = function () {
  this.food = {grain: "grain", meat: 'meat', fish: 'fish', bugs: 'bugs'};

  this.animals = [];
};

var animalDefs = {
  animal: {
    jungleRef: null,
    animalType: 'animal',
    usCount: 0,
    countUs: function () {
      this.usCount = 0;
      for (var i = 0; i < this.jungleRef.animals.length; i++) {
        var animal = this.jungleRef.animals[i];
        if (animal.animalType === this.animalType) {
          this.usCount ++;
        }
      }
      return this.usCount;
    },
    makeSound: function () {
      if (this.animalType === 'monkey') {
        this.energyLevel -= 4;
      }
      else {
        this.energyLevel -= 3;
      }
    },
    eat: function (food) {
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
        this.energyLevel += 2;
      } else {
        console.log(this.animalType + ' BARF!');
        this.energyLevel -= 1;
      }
    },
    sleep: function () {
      if (this.animalType === 'tiger') {
        this.energyLevel += 5;
      }
      else {
        this.energyLevel += 10;
      }
    }
  },
  monkey: {
    foods: ['grain', 'fish', 'bugs'],
    sound: 'ooooh',
    energyLevel: 0
  },
  tiger: {
    foods: ['meat', 'fish'],
    sound: 'rrrrrrrrrrr',
    energyLevel: 0
  },
  snake: {
    foods: ['grain', 'meat', 'fish', 'bugs'],
    sound: 'ssss',
    energyLevel: 0
  }
};

Jungle.prototype.tarzanCall = function () {
  for (var i = 0; i < this.animals; i++) {
    console.log(aAnimals[i].type + ' says ' + aAnimals[i].makeSound() + ' my energy is ' + aAnimals[i].energyLevel);
  }
};

Jungle.prototype.addAnimal = function (animalType, config) {
  var animal = new Animal(this, animalType, config);
  this.animals.push(animal);
};

Jungle.prototype.feedAnimals = function (animalType, food) {
  for (var i = 0; i < this.animals.length; i++) {
    this.animals[i].eat(food);
  }
};

function Animal(jungleRef, animalType, config) {
  var animal = animalDefs['animal'];
  animal.animalType = animalType;
  animal.jungleRef = jungleRef;
  var animalDef = animalDefs[animalType];
  var prop = '';
  for (var prop in config) {
    if (config.hasOwnProperty(prop)) {
      animal[prop] = config[prop];
    }
  }
  for (var prop in animalDef) {
    if (animalDef.hasOwnProperty(prop)) {
      animal[prop] = animalDef[prop];
    }
  }
  return animal;
}

module.exports = Jungle;