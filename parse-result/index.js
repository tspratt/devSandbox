'use strict';

var  xml2js   = require('xml2js');

function ParseResult() {

}

var parseString = xml2js.parseString;

function getResidentialStatusValue(data) {
  return data['soapenv:Envelope']['soapenv:Body'][0]['v2:AddressValidationReply'][0]['v2:AddressResults'][0]['v2:ProposedAddressDetails'][0]['v2:ResidentialStatus'][0];
}

ParseResult.prototype.getResidentialStatus = function getResidentialStatus(xml) {
  return getResidentialStatusValue(parseString(xml));
};

ParseResult.prototype.getJson = function getJson(xml) {
  return parseString(xml);
};
module.exports = ParseResult;
