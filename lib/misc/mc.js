/**
 * Created by Tracy on 11/9/2015.
 */


function fibonacci() {
  var iCount = 100;
  var aOut = [];
  var iFibPrev1 = 0;
  var iFibPrev2 = 0;
  var iFib = 0;
  for (var i=0; i<iCount; i++) {
    if (i < 2) {
      iFib = i;
    }
    else  {
      iFib = iFibPrev1 + iFibPrev2;
    }
    iFibPrev1 = iFibPrev2;
    iFibPrev2 = iFib;
    aOut.push(iFib);
  }
  return aOut;
}

function fibonacciW(iCount) {
  iCount = iCount || 100;
  var aOut = [];
  var iFibPrev1 = 0;
  var iFibPrev2 = 0;
  var iFib = 0;
  while (aOut.length <= iCount) {
    if (iFib === 0) {
      iFib += 1;
    }
    else  {
      iFib = iFibPrev1 + iFibPrev2;
    }
    iFibPrev1 = iFibPrev2;
    iFibPrev2 = iFib;
  }

  return aOut;
}

exports.fibonacci = fibonacci;
exports.fibonacciW = fibonacciW;