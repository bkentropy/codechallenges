var bubbleSort = function(array) {
      var newArr = array.slice();
        var bubArr = [];
          while(newArr.length) {
                  var greatest = newArr.reduce(function(great, val) {
                            if ( val > greatest) {
                                        great = val;
                                              }
                                  return great;
                                      })
                      bubArr.push(greatest);
                          var idxToRemove = newArr.indexOf(greatest);
                              newArr.splice(idxToRemove, 1);
                                  
                                }
            return bubArr;
};
