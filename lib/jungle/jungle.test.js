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
    }
  );


});
