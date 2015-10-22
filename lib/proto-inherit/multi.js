/**
 * Created by Tracy on 10/22/2015.
 */
"use strict";

var Multi = function () {

};


function PagedDataList () {}
PagedDataList.prototype = {
  getNext: function () {
    console.log('PagedDataList.getNext');
  },
  getLast: function () {
    console.log('PagedDataList.getLast');
  }
};

function SortedDataList() {}
SortedDataList.prototype = {
  getNext: function () {
    console.log('SortedDataList.getNext');
  }
};

function SalesDataList() {
  PagedDataList.call(this);
  SortedDataList.call(this);
  this.sort = function () {
    console.log('SalesDataList.sort');
  };
  var propName = '';
  for (propName in PagedDataList.prototype) {
    if (PagedDataList.prototype.hasOwnProperty(propName)) {
      this[propName] = PagedDataList.prototype[propName];
    }

  }
  for (propName in SortedDataList.prototype) {
    if (SortedDataList.prototype.hasOwnProperty(propName)) {
      this[propName] = SortedDataList.prototype[propName];
    }
  }
}
//SalesDataList.prototype = new PagedDataList();

Multi.prototype.run = function() {
  var salesDataList = new SalesDataList();
  salesDataList.getNext();
  salesDataList.getLast();
  salesDataList.sort();
};

module.exports = Multi;