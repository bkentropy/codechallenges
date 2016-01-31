function onlyUnique (str) {
  var uniObj = {};
  var onlyU = ''
  for ( var i = 0; i < str.length; i++ ) {
    if ( uniObj[str[i]] ) {
      uniObj[str[i]] += 1
    } 
    if ( uniObj[str[i]] === undefined ) {
      uniObj[str[i]] = 1;
    }
  }
  for ( var j = 0; j < str.length; j++ ) {
    if ( uniObj[str[j]] === 1 ) {
      onlyU += str[j];
      // onlyU = onlyU.concat(str[j])
    }
  }

  return onlyU;
}

console.log(onlyUnique('jjaajajlqwer'))
