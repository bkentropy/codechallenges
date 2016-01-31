function telephoneWords (digitString) {
  // var tNine = {
  //   1: "1",
  //   2: "ABC",
  //   3: "DEF",
  //   4: "GHI",
  //   5: "JKL",
  //   6: "MNO",
  //   7: "PQRS",
  //   8: "TUV",
  //   9: "WXYZ",
  //   0: "0"
  // }
  var digitStr = digitString.toString()
  // console.log(digitStr)
  var tNine = ["0", "1", "ABC","DEF","GHI","JKL","MNO","PQRS","TUV","WXYZ",];
  var permSoFar = [];
  for ( var i = 0; i < digitStr.length; i++ ) {
    var c = digitStr[i];
    // console.log(c) 
    for ( var j = 0; j < tNine[c].length; j++ ) {
      var col = tNine[c][j];
      // console.log(col) 
      permSoFar.push(col)
    }
  }
  for ( var k = 0; k , permSoFar.length; k++ ) {

  }
  return permSoFar
}

var telephoneWords2 = function(digitString) {
  var permSoFar;
  var tNine = {
    1: "1",
    2: "ABC",
    3: "DEF",
    4: "GHI",
    5: "JKL",
    6: "MNO",
    7: "PQRS",
    8: "TUV",
    9: "WXYZ",
    0: "0"
  }
  var variations = function(input, stackOn) {
    stackOn = stackOn || [];
    var inp = input.toString();
    if ( stackOn.length ) {
      for ( var out = 0; out < stackOn.length; out++ ) {
        // inner loop => i
        for ( var i = 0; i < tNine[inp].length; i++ ) {
          permSoFar.push(tNine[inp][i] + stackOn[out])
          // stackOn[out] += tNine[inp][i]
          // tNine[inp][i] => ABC
          // stackOn[out] => D E F 
        }
      }
    } else {
      // inner loop => i
      for ( var i = 0; i < tNine[inp].length; i++ ) {
        stackOn.push(tNine[inp][i])
      }
    }
    
    return stackOn
  }

  variations(2, ['D','E','F'])
  return permSoFar
}  


console.log(telephoneWords2(1))

// console.log(telephoneWords(19))