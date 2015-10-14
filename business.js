/**
 * Contains business logic functions for shell app
 */
"use strict";
var request = require('request');
var template = require('./template');
var parseString = require('xml2js').parseString;
// var parseResult = require('./parse-result');

var soap = require('soap');
var url = 'http://www.webservicex.net/stockquote.asmx?WSDL';
var args = {symbol: 'NKE'};

var fedexConfig =  {
  "url": "https://wsbeta.fedex.com:443/web-services",
  "key": "hHKlFYw2J93AHmqQ",
  "password": "v8FaLycLyMNH77yke02osbFWJ",
  "accountNumber": "488083562",
  "meterNumber": "000796745"
};

function postFedex(address, callback) {
  var aAddressLines = [address.line1];
  if (address.line2 && address.line2.length > 0) {
    aAddressLines.push(address.line2);
  }
  var requestData = {
    'key': fedexConfig.key,
    'password': fedexConfig.password,
    'accountNumber': fedexConfig.accountNumber,
    'meterNumber': fedexConfig.meterNumber,
    'addressLines': aAddressLines,
    'city': address.city,
    'region': address.region,
    'country': address.country,
    'postal': address.postal,
    'timestamp': new Date().toISOString(),
    'optionXml': '',
    'ip': '',
    'site': '',
    'sid': '',
    'stid': '',
    'e4xcode': '',
    'fedexWebserviceTimeout': 10
  };
  var requestXml = template(requestData);
  console.log('input params: ', JSON.stringify(requestData));
  var requestParams = {
    url: fedexConfig.url,
    method: 'POST',
    body: requestXml
  };
  console.log('.calling request. params: ', JSON.stringify(requestData));


  request(requestParams,
    function (error, response, body) {
      console.log('*** response status: ', response.statusCode);
      if (error) {
        console.log('...request.post...error: ', JSON.stringify(error, null, 2));
      }
      else {
        console.log('body', JSON.stringify(body, null, 2));

        var parsed = parseResult(decoded);
        console.log('parsed', JSON.stringify(parsed, null, 2));

        callback(parsed);
      }

    });

}

function postTestService(callback) {
  soap.createClient(url, function(err, client) {
    client.StockQuote.StockQuoteSoap.GetQuote(args, function(err, response) {
      console.log('stockquopte response: ', response);
      var xml = response.GetQuoteResult;
      console.log('xml: ', xml);
      var oJson = parseString(xml);
      console.log(JSON.stringify(oJson));
      callback(oJson);
    });
  });
}

function getHttpResponse(callback) {
  request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(response);
    }
  })
}

function parseSoap(xml, callback) {
  var oJson = parseString(xml);
  callback(oJson);
}

exports.parseSoap = parseSoap;
exports.postFedex = postFedex;
exports.getHttpResponse = getHttpResponse;
exports.postTestService = postTestService;


