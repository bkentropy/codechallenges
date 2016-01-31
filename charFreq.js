function characterFrequency (string) {
  var storage = {};
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    var c = string[i]
    storage[c] = counter++;
  }
  return storage;
}