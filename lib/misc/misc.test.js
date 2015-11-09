/**
 * Created by Tracy on 10/27/2015.
 */
"use strict";
var chai = require("chai");
var expect = chai.expect;
var mc = require('./mc');

function asyncAssertionCheck(done, f) {
  try {
    f();
    done();
  } catch(e) {
    done(e);
  }
}

describe('Misc tests', function () {
  describe.only('Test Multiple Sum)',
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
describe.only('fib', function () {
  describe.only('Test Multiple Sum)',
    function () {
      it('print Fib', function (done) {
        var sFib = mc.fibonacci();
        expect(sFib.substr(0,13)).to.equal('0,1,1,2,3,5,8');
        done();
      });
    }
  );

});

