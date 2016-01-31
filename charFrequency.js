function characterFrequency (string) {
  var storage = {};
  var valueArr = [];
  var alphaArr = [];
  var finalArr = [];
  for (var i = 0; i < string.length; i++) {
    var c = string[i];
    storage[c] = storage[c] || 0;
    if ( c in storage ) {
      storage[c] += 1;
    }
  }
  var aoArr = [];
  for (var key in storage) {
    aoArr.push([key, storage[key]]);
  }
  aoArr.sort(function(a,b) {
    return a[1] < b[1];
  })


  // for (var key in storage) {
  //   valueArr.push(storage[key])
  // }
  // valueArr.sort(function(a,b) {return a > b})


  // for (var j = 0; j < valueArr.length; j++) {
  //   if ( valueArr[j] in storage) {

  //   }
  // }

  return aoArr;
}

var myStr = "mississippi";
console.log(characterFrequency(myStr));
