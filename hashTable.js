  var makeHashTable = function(){
    var table = {};
    var storage = [];
    var storageLimit = 1000;

    table.insert = function(key, value){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      storage[index] = storage[index] || [];
      var bucket = storage[index];
      // seems useless
      var keyExist = false;
      for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        if ( tuple[0] === key) {
          tuple[1] = value;
          keyExist = true
        }
      }  
      if ( !keyExist ) {
        bucket.push([key, value])
      }
    };

    table.retrieve = function(key){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      var bucket = storage[index];
      if (bucket) {
        for (var i = 0; i < bucket.length; i++) {
          var tuple = bucket[i];
          if ( tuple[0] === key ) {
            return tuple[1]
          }
        }
      }
      
    };

    table.remove = function(key){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      delete storage[index]
    }
    return table;  
  };  
 var getIndexBelowMaxForKey = function(str, max){
   var hash = 0;
   for (var i = 0; i < str.length; i++) {
     hash = (hash<<5) + hash + str.charCodeAt(i);
     hash = hash & hash; // Convert to 32bit integer
     hash = Math.abs(hash);
   }
   return hash % max;
 };
