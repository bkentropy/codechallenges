// 0 1 1 2 3 5 8 13 21
// 0 1 2 3 4 5 6 7 8 

nthFibonacci = function(n) { 
  var start = [0,1]
  if ( n === 0 ) {
    return 0;
  }
  if ( n === 1 ) {
    return 1;
  }
  
  for (var i = 0; i < n; i++) {
    start.push(start[i]+start[i+1])
    console.log(start)
  }
  
  return 
};

var sum = function(array) {
  for ( var )
}

console.log(nthFibonacci(2))
//expected 8 to equal 5 @ 5