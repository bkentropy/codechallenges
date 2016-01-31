var treeMaker = function(value){
  var newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  newTree.childCounter = 0;
  return newTree;
};
treeMaker.methods = {};
treeMaker.methods.addChild = function(value){
  var node = treeMaker(value);
  this.children[this.childCounter] = node
  this.childCounter++

}
// treeMaker.methods.contains = function(target){
//   var node = this
//   var result = false;
//   for (var i = 0; i < node.children.length; i++) {
//     if ( node.children[i].value === target ) {
//       result = true;
//     } else {
//      return node.children[i].contains(target)
//     }
//   }
//   return result;
// }
treeMaker.methods.contains = function(value){
  if (this.value === value){
    return true;
  }
  for(var i=0; i<this.children.length; i++){
    var child = this.children[i]
    if (child.contains(value)){
      return true;
    }
  }
  return false;
}