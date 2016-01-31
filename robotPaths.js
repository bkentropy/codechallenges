// write a function that takes the size n, the board's state, the i'th position, 
// and the j'th position 

// if the board state is not given, make the board

// check these conditions:
  // i >= 0 --> true
  // i < n --> true
  // j >= 0 --> true
  // j < n --> true
  // || if i,j has been visited
    // return 0;

// one possible path if you're at the end point
// the path that led there
// if i = n-1 && j = n-1 
  // return 1

// otherwise, toggle the current position and recursively find the number
// of paths in each direction with the current sqaure toggled
  // the result is the addition (recursively) of the directions
  // around the current i,j position

// return the board to its original state
  // toggle current position
  // return result

var robotPaths = function(n, board, i, j) {
  if ( !board ) {
    board = makeBoard(n);
    i = 0;
    j = 0;
  }
  
  if ( !(i >= 0 && i < n && j >= 0 && j < n) ) {
    return 0;
  }
  if ( board.hasBeenVisited(i,j) ) {
    return 0;
  }
  if( i === n - 1 && j === n - 1 ) {
    return 1;
  }
  board.togglePeice(i,j);
  var paths = robotPaths(n, board, i, j + 1) + robotPaths(n, board, i, j - 1) + robotPaths(n, board, i + 1, j) + robotPaths(n, board, i - 1, j)
  board.togglePeice(i,j);
  return paths;
};
















// function robotPaths (n) {
//   // the board will be nxn
//   var i = 0
//   var j = 0
//   var paths = 0
//   var board = makeBoard(n)
//   function pathFinder(i,j) {
//     board.togglePiece(i,j);
//     if(i===n && j===n) {
//       return paths++
//     }
//   }
//   // start with i path
//   for (i; i<n; i++) {
//     pathFinder(i,j)
//     if(availability(i,j)) {
//       pathFinder(i,j++)
//     }
//   }
//   // start with j path
//   for (j; j<n; j++) {
//     pathFinder(i,j)
//   }

//   // this function checks all locations around it to see if it can go there
//   function availability(i,j) {
//     if (board.hasBeenVisited(i+1, j)) {
//       //move there
//       return true;
//     }
//     if (board.hasBeenVisited(i-1, j)) {
//       //move there
//       return true;
//     }
//     if (board.hasBeenVisited(i, j+1)) {
//       //move there
//       return true;
//     }
//     if (board.hasBeenVisited(i, j-1)) {
//       //move there
//       return true;
//     }
//   }
//   return paths
// }