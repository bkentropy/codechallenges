function evenOccurrence (arr) {
  var countObj = {}
  
  for ( var i = 0; i < arr.length; i++ ) {
    var cur = arr[i]
    countObj[cur] = countObj[cur] || 0
    if ( cur in countObj ) {
      countObj[cur] += 1
    }
  }
  for ( i = 0; i < arr.length; i++ ) {
    if ( countObj[arr[i]] % 2 === 0 ) {
      return arr[i]
    } 
  } 
  return null;
}

var one = [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ];

console.log(evenOccurrence(one));