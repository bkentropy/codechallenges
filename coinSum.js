function coinSum(total, coinss) {
  var targetLength = total + 1;
  var coinsLength = coinss.length;
  total = [1];

  for ( var a = 0; a < coinsLength; a++ ) {
    for ( var b = 1; b < targetLength; b++ ) {
      // initialize undefined target
      total[b] = total[b] ? total[b] : 0;

      // accumulate target + operand ways
      total[b] += (b < coinss[a]) ? 0 : total[b-coinss[a]];
    }
  }

  return total[targetLength-1];
}

var coins = [1,2,5,10,20,50,100,200];

console.log(coinSum(95, coins));
