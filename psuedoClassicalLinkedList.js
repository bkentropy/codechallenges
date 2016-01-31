var LinkedList = function (initialValue) {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value) {
  var newTail = this.Node(value)
  if ( this.tail !== null ) {
  this.tail.next = newTail
  this.tail = newTail
  } else if ( this.tail === null ) {
    this.head = newTail;
    this.tail = this.head;
  }
}

LinkedList.prototype.removeHead = function() {
  var headVal = this.head.value 
  if ( this.head === this.tail ) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next
  }
}

LinkedList.prototype.contains = function(val) {
  
}

LinkedList.prototype.Node = function(value) {
  var node = {}
    node.value = value;
    node.next = null;
  return node;
}

var list = new LinkedList();
    list.addToTail(4);
    list.addToTail(5);
    list.addToTail(9);
    list.removeHead();
    list.addToTail(8);
    list.addToTail(7);


console.log(list)





