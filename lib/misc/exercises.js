/**
 * Created by Tracy on 10/27/2015.
 */
/**
 * Sum multiples of 3 and 5 between 0 and 1000
 */
function sumMultiples () {
  var multiplesSum = 0;
  for (var i=0;i<1000;i++) {
    if (i%3 === 0 || i%5 === 0) {
      multiplesSum += i;
    }
  }
  console.log('Sum of Multiples of 3, 5: ', multiplesSum);
  return multiplesSum;
}

/**
 * sum other element si an array
 */
function sumOthers(aIn) {
  var aOut = [] ;
  var curVal;
  aIn.forEach(function(val, index, array) {
    aOut[index] = aOut[index] || 1;
    for (var i = 0; i < array.length; i++) {
      if (i !== index){
        curVal = array[i];
        aOut[index] *= curVal
      }
    }
  });
  return aOut;
}
/**
 * sum other element si an array
 */
function sumOthersR(aIn) {
  var aOut = [] ;
  var maxVal;
  maxVal = aIn.reduce((prevVal, curVal) => {return prevVal * curVal},1);
  for (var i = 0; i < aIn.length; i++) {
    aOut[i] = maxVal / aIn[i];
  }

  return aOut;
}
exports.sumOthers = sumOthers;
exports.sumOthersR = sumOthersR;