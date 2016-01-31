function sumArray (array) {
  var n = array.length
  var sums = [];
  var contig = array.slice();
  
  var reduceSum = function(start, fin) {
    start = start || 0;
    fin = fin || 1;
    console.log(contig)
    contig = array.slice(start, fin);
    return contig.reduce(function(a,b) {
      return a + b;
    })
  }
  for ( var i = 0; i < n; i++) {
    for ( var j = 1; j <= 3; j++ ) {
      sums.push(reduceSum(i, j));
    }
  }

  return sums
  // var greatest = 0;
  // for ( var i = 0; i < sums.length; i++ ) {
  //   if ( sums[i] > greatest ) {
  //     greatest = sums[i]
  //   }
  // } 
  // return greatest
}

var a = [ 1, 2, 3 ];
var b = [ 4, -1, 5 ];
var c = [ 10, -11, 11 ];
console.log(sumArray(a))



  //   // 0 
  //   sums.push(array[0]);
  //   // 0+1
  //   sums.push(array[0] + array[1]);
  //   // 0+1+2...+n
  //   sums.push(array[0] + array[1] + array[2]);
    
  // // for index 1 check sums for idxs
  //   // 1
  //   sums.push(array[1]);
  //   // 1+2
  //   sums.push(array[1] + array[2]);
  //   // 1+2...+n
    
  // // for index 2
  //   //2
  //   sums.push(array[2])
  // // continue on till n

