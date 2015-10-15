// © 2013 Triton Digital, Inc.
"use strict";
var chai = require("chai");
var expect = chai.expect;
var Jungle = require('./jungle');
var jungle = new Jungle();

function asyncAssertionCheck(done, f) {
  try {
    f();
    done();
  } catch(e) {
    done(e);
  }
}

describe('Setup tests', function () {
  this.timeout(10000);
  beforeEach(function () {

  });

  describe('Test ',
    function () {
      it(' should pass', function (done) {
        done();

      });
      it('return a Jungle object', function () {
        var food = jungle.food;
        expect(food).to.be.not.null;
        expect(food).to.be.an.object;
        expect(food.meat).to.equal('meat');
      });
      it('return a generic Animal object', function () {
        var food = jungle.food;
        expect(food).to.be.not.null;
        expect(food).to.be.an.object;
        expect(food.meat).to.equal('meat');
      });
      it('should add a Monkey Animal object', function () {
        var animalCount = jungle.animals.length;
        jungle.addAnimal('monkey',{});
        expect(jungle.animals.length).to.be.greaterThan(animalCount);
      });
      it('should get monkey count', function () {
        jungle.addAnimal('monkey',{});
        jungle.animals[0].countUs();
        var monkeyCount = jungle.animals[0].usCount;
        var animalCount = jungle.animals.length;
        expect(monkeyCount).to.equal(animalCount);
      });
      it('should feed all Monkeys good food ', function () {
        var monkeyEnergy = jungle.animals[0].energyLevel
        jungle.addAnimal('monkey',{});
        jungle.feedAnimals('monkey', 'grain');
        expect(jungle.animals[0].energyLevel).to.be.greaterThan(monkeyEnergy);
      });
      it('should feed all Monkeys Bad food ', function () {
        var monkeyEnergy = jungle.animals[0].energyLevel
        jungle.addAnimal('monkey',{});
        jungle.feedAnimals('monkey', 'meat');
        expect(jungle.animals[0].energyLevel).to.be.lessThan(monkeyEnergy);
      });
    }
  );


});
