function isBalanced (str) {
  var arr = str.split("");
  var stack = [];
  // should iterate through the string once considering the opening and closing brackets it 'sees'
  // ultimately returns true or false regarding whether or not the string has balanced parens/brackets
 
  var resultStack = arr.reduce(function(stacker, current) {
    if (current === "(" || current === ")") {
      stacker.push(current);
    }
    return stacker;
  }, stack)

  function remover(arr) {
    var openAccumulator = [];
    for (var i = 0; i < arr.length; i++) {
      var cur = arr[i]
      if (cur !== ")") {
        openAccumulator.push(cur)
      }
      if (cur === ")") {
        openAccumulator.shift()
      }
    }
    var result = true;
    if (openAccumulator.length > 0) {
      result = false;
    }
    return result;
  }

  return remover(resultStack);
}


console.log(isBalanced("(50)("))
