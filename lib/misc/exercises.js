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

