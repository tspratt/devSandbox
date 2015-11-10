/**
 * Created by Tracy on 10/27/2015.
 */
"use strict";
var chai = require("chai");
var expect = chai.expect;
var mc = require('./mc');
var ex = require('./exercises');

function asyncAssertionCheck(done, f) {
  try {
    f();
    done();
  } catch(e) {
    done(e);
  }
}

describe('Misc tests', function () {
  describe('Test Multiple Sum)',
    function () {
      it('log a value', function (done) {
        var multiplesSum = 0;
        for (var i=0;i<1000;i++) {
          if (i%3 === 0 || i%5 === 0) {
            multiplesSum += i;
          }
        }
        console.log('Sum of Multiples of 3, 5: ', multiplesSum);
        done();
      });
    }
  );

});
describe('fib', function () {
  describe('Fibonacci series calc)',
    function () {
      it('should print Fib series using for loop', function (done) {
        var aFib = mc.fibonacci();
        var sFib = aFib.join(',');
        expect(sFib.substr(0,13)).to.equal('0,1,1,2,3,5,8');
        console.log(sFib);
        done();
      });
      it('should print Fib series using while loop', function (done) {
        var iCount = 100;
        var aFib = mc.fibonacci(iCount);
        expect(aFib.length).to.equal(iCount);
        var sFib = aFib.join(',');
        expect(sFib.substr(0,13)).to.equal('0,1,1,2,3,5,8');
        console.log(sFib);
        done();
      });
    }
  );

});

  describe.only('Array test', function () {
    /**
     * 2x3x4=24
     * 1x3x4=12
     * 1x2x4=8
     * 1x2x3=6
     */
      it('sums certain values in an array', function (done) {
        var aResult = ex.sumOthers([1,2,3,4]);
        expect(aResult[0]).to.equal(24);
        expect(aResult[3]).to.equal(6);
        done();
      });
    it('sums certain values in an array 2', function (done) {
      var aResult = ex.sumOthersR([1,2,3,4]);
      expect(aResult[0]).to.equal(24);
      expect(aResult[3]).to.equal(6);
      done();
    });
    }
  );



