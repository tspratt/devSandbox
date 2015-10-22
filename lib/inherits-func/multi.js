/**
 * Created by Tracy on 10/22/2015.
 */
"use strict";


var Multi = function () {

};


function inherit(proto, extensions) {
  var constructor = function () {};
  constructor.prototype = proto;
  var oExtend;
  for (var i = 0; i < extensions.length; i++) {
    oExtend = extensions[i];
    for (var propName in oExtend) {
      if (oExtend.hasOwnProperty(propName)) {
        constructor.prototype[propName] = oExtend[propName];
      }
    }
  }
  return new constructor();
}

var PagedDataList = {
  getNext: function () {
    console.log('PagedDataList.getNext');
  },
  getLast: function () {
    console.log('PagedDataList.getLast');
  }
};


var SortedDataList = {
  getNext: function () {
    console.log('SortedDataList.getNext');
  }
};

var SalesDataList = inherit(PagedDataList,
  [SortedDataList, {
    sort: function () {
      console.log('SalesDataList.sort');
    }
  }]);



Multi.prototype.run = function () {
  var salesDataList = Object.create(SalesDataList);
  salesDataList.getNext();
  salesDataList.getLast();
  salesDataList.sort();
};

module.exports = Multi;