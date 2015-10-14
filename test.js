// © 2013 Triton Digital, Inc.
"use strict";
var chai = require("chai");
var expect = chai.expect;
var packageJson = require('./package.json');
var business = require('./business');

var prevValue = '';

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
	var inputAddress,
		fedex;
	beforeEach(function () {
		inputAddress = {
			line1: '22 Trenton Street',
			line2: 'Apt 12345',
			city: 'Boston',
			state: 'MA',
			postal: '02129',
			country: 'USA'
		};

	});

	describe.only('Test HTTP)',
		function () {

			it('should make an http request', function (done) {
				business.getHttpResponse(	function (response) {
						// console.log('http test response; ', response);
						expect(response).to.be.not.null;
						done();
					}
				);
			});

			it('should parse soap response xml', function (done) {
				var xml = '<StockQuotes><Stock><Symbol>NKE</Symbol><Last>116.56</Last><Date>9/21/2015</Date><Time>4:01pm</Time><Change>+1.51</Change><Open>115.67</Open><High>117.09</High><Low>114.76</Low><Volume>4371364</Volume><MktCap>99.70B</MktCap><PreviousClose>115.05</PreviousClose><PercentageChange>+1.31%</PercentageChange><AnnRange>79.27 - 117.72</AnnRange><Earns>3.70</Earns><P-E>31.50</P-E><Name>Nike</Name></Stock></StockQuotes>';
				business.parseSoap(xml,function (response) {
						console.log('http postTestService response; ', response);
						done();
					}
				);
			});
			it('should make an http request to a web service', function (done) {
				business.postTestService(function (response) {
						console.log('http postTestService response; ', response);
						done();
					}
				);
			});


			it('should make an http request to fedex service', function (done) {
				business.postFedex(inputAddress,function (response) {
						console.log('http fedex response; ', response);
						done();
					}
				);
			});
		}
	);


});
