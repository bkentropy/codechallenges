
// Input 
// string:
// "abc" 

// Output
// [ "abc", "acb", "bac", "bca", "cab", "cba" ]


function allAnagrams (string) {
  var allChars = string.split('');
  var results = [];

  function addOn (remainingLetters, wordSoFar) {
    if (remainingLetters.length === 0) {
      return results
    }
    for (var i = 0; i < remainingLetters.length; i++) {
      var current = remainingLetters[i];
      wordSoFar += current
      console.log(wordSoFar)
    }
    results.push(wordSoFar);
    addOn()
  }
  addOn(allChars, '')

  return results;
}

console.log(allAnagrams('cha'))
