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
  return aOut.join(',');
}

exports.fibonacci = fibonacci;