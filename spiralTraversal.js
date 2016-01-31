function spiralTraversal (matrix) {
  var visited = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0]
  ]
  var spiraled = [];
  
  function movement(i,j) {
    spiraled.push(matrix[i][j])
    visited[i][j] = 1;
    function right() {
      if (matrix[i][j+1] && !visited) {
        movement(i,j+1)
        // return true;
      }
      // return false;
    }
    function down() {
      if(matrix[i+1]) {
        if (matrix[i+1][j] && !visited) {
          movement(i+1,j)
          // return true;
        }
      }
      // return false;
    }
    function left() {
      
    }
    function up() {
      
    }
    // maybe if these return true execute movement again
    // if(right()) {
      right()
    // }
    // if(down()) {
      down()
    // }
    // left();
    // up();
  }
  movement(0,0);
  
  return spiraled;
  
}

var test1 = [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ], [ 16, 17, 18, 19, 20 ], [ 21, 22, 23, 24, 25 ] ]
console.log(spiralTraversal(test1))












