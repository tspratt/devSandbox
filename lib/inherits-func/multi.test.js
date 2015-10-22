/**
 * Created by Tracy on 10/22/2015.
 */
"use strict";
var chai = require("chai");
var expect = chai.expect;
var Multi = require('./multi');
var multi = new Multi();

describe.only('Multi-inheritance tests', function () {
  it(' should pass', function (done) {
    done();

  });
  it('should find a Jungle object', function () {
    multi.run();

  });
});