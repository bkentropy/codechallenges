function rockPaperPermutation (roundCount) {
 // roundCount = roundCount || 3
  var outcomes = [];
  var plays = ['r', 'p', 's'];
  
  var combos = function(roundsLeft, playedSoFar) {
    if ( roundsLeft === 0 ) {
      outcomes.push(playedSoFar)
      return
    }
    for ( var i = 0; i < plays.length; i++ ) {
      var currentPlay = plays[i];
      combos(roundsLeft-1, playedSoFar.concat(currentPlay))
    }
  }
  if (roundCount === 0) {
    return [];
  } else {
  combos(roundCount, '')
  return outcomes;
  }
}

console.log(rockPaperPermutation(2))