/**
 * Created by Tracy on 10/29/2015.
 */
'use strict';

var chai = require("chai");
var expect = chai.expect;
var Jungle = require('./jungle');
var jungle = new Jungle();
var animalCur;

describe('Jungle tests', function () {
  describe('Test jungle functionality',
    function () {
      it(' should pass', function (done) {
        done();

      });
      it('should find a Jungle object', function () {
        var aAnimals = jungle.animals;
        expect(aAnimals).to.be.not.null;
        expect(aAnimals).to.be.an.array;
      });
      it('should add a Monkey Animal object', function () {
        var animalCount = jungle.animals.length;
        jungle.addAnimal('monkey');
        expect(jungle.animals.length).to.be.greaterThan(animalCount);
      });
      it('should feed all Monkeys ', function () {
        var monkeyEnergy = jungle.animals[0].energyLevel;
        jungle.addAnimal('monkey');
        jungle.feedAnimals('monkey', 'grain');
        expect(jungle.animals[0].energyLevel).to.be.greaterThan(monkeyEnergy);
      });
      it('should add a Tiger Animal object', function () {
        var animalCount = jungle.animals.length;
        jungle.addAnimal('tiger');
        expect(jungle.animals.length).to.be.greaterThan(animalCount);
      });
      it('should feed all Tigers good food', function () {
        for (var i=0; i<jungle.animals.length; i++) {
          if (jungle.animals[i].animalType === 'tiger') {
            animalCur = jungle.animals[i];
            break;
          }
        }
        var tigerEnergy = animalCur.energyLevel;
        jungle.feedAnimals('tiger', 'meat');
        expect(animalCur.energyLevel).to.be.greaterThan(tigerEnergy);
      });
      it('should feed all Tigers BAD food', function () {
        var tigerEnergy = animalCur.energyLevel;
        jungle.feedAnimals('tiger', 'grain');
        expect(animalCur.energyLevel).to.equal(tigerEnergy);
      });
      it('should make jungle sound off ', function () {
        var sounds = jungle.soundOff();
        expect(sounds).to.be.greaterThan(0);
      });
      it('should make a Monkey play', function () {
        var monkeyEnergy = jungle.animals[0].energyLevel;
        jungle.animals[0].play();
        expect(jungle.animals[0].energyLevel).to.be.lessThan(monkeyEnergy);
      });
      it('should have tired Monkey refuse to play', function () {
        jungle.animals[0].energyLevel = 4;
        jungle.animals[0].play();
        //expect(jungle.animals[0].energyLevel).to.equal(monkeyEnergy);
      });
    }
  );


});