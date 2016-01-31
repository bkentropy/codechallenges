function arrayception (array) {
  var max = 0;
  
  var subroutine = function(current, depth) {
    for ( var i = 0; i < current.length; i++ ) {
      var el = current[i];
      if (Array.isArray(el)) {
        subroutine(el, depth+1);
      } else {
        if (depth > max) {
          max = depth;
        }
      }
    }
  }
  
  subroutine(array, 1)
 
  return max; 
}

console.log(arrayception([ [ 5 ], [ [ ] ] ]))
