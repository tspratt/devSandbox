/**
 * Created by Tracy on 10/14/2015.
 */

var Jungle = function() {
  this.food = {grain:"grain",meat:'meat', fish:'fish', bugs:'bugs'};
  this.AnimalDefs = {
    monkey: {foods:[],
    sound: '',
    energyLevel: 0},
    tiger: {},
    snake: {}
  };
  this.animals = [];
};


Jungle.prototype.tarzanYell = function () {
  for (var i = 0; i < aAnimals; i++) {
    console.log(aAnimals[i].type + ' says ' + aAnimals[i].makeSound() + ' my energy is ' + aAnimals[i].energyLevel);
  }
};

Jungle.prototype.addAnimal = function(animal){
  aAnimals.push(animal);
};

module.exports = Jungle;