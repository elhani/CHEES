// initializeBoard: (boardSize: integer) -> Array
function initializeBoard(boardSize) {
    return [...Array(boardSize)].map(v => 
                [...Array(boardSize)].map(v => false));
  }
  
  // copyBoard: (board: Array) -> Array
  function copyBoard(board) {
    return board.map(column => column.slice());
  }
  
  // entireBoardVisited: (board: Array) -> boolean
  function entireBoardVisited(board) {
    return board.every(column => column.every(square => square));
  }
  
  // possibleMoves: (x: integer, y: integer, 
  //                 board: Array, size: integer) -> Array
  function possibleMoves(x, y, board, size) {
    var moves = []
    
    var possibilities = [[1, 2], [1, -2], [-1, 2], [-1, -2],
                       [2, 1], [2, -1], [-2, 1], [-2, -1]]
    for (var [offsetX, offsetY] of possibilities) {
      var newX = x + offsetX;
      var newY = y + offsetY;
      if ( newX < size && newX >= 0 
        && newY < size && newY >= 0 
        && !board[newX][newY]) {
          moves.push([newX, newY]);
      }
    }
    return moves;
  }
  
  // visitNextPosition: (x: integer, y: integer, 
  //                     board: Array, boardSize: integer) 
  //                     -> Array|boolean
  function visitNextPosition(x, y, board, boardSize) {
    cellVisits++;
  
    var copiedBoard = copyBoard(board);
    copiedBoard[x][y] = true;
    
    var moves = possibleMoves(x, y, copiedBoard, boardSize);
    if (moves.length === 0 ) {
      if (entireBoardVisited(copiedBoard)) return [[x, y]];
      else return false;
    }
  
    moves = warnsdorff(moves, copiedBoard, boardSize);
    
    for (var [nextX, nextY] of moves) {
      var path = visitNextPosition(nextX, nextY, copiedBoard, boardSize);
      if (!!path) {
        path.push([x, y]);
        return path;
      }
    }
    return false;
  }
  
  // warnsdorff: (moves: Array, board: Array, size: integer) -> Array
  function warnsdorff(moves, board, size) {
    var weightedMoves = [];
    for (var [x, y] of moves) {
      var weight = possibleMoves(x, y, board, size).length;
      weightedMoves.push({move: [x, y], weight});
    }
    return weightedMoves
            .sort((a, b) => a.weight - b.weight)
            .map(weighted => weighted.move);
  }
  
  // knightsTour(x: integer, y: integer, 
  //             boardSize: integer) -> Array|boolean
  function knightsTour(x, y, boardSize) {
    const board = initializeBoard(boardSize);
    
    return visitNextPosition(x, y, board, boardSize).reverse();
  }
  
  var cellVisits = 0;
  var gogoKnight = "gogoKnight " ;
  var randX = Math.floor(Math.random() * 7);
  var randY = Math.floor(Math.random() * 7);
  
  console.log(gogoKnight);
  console.log(knightsTour(randX, randY, 8));
  
  console.log(cellVisits);

  var BFS = function(CHEVAL, pointA) {
      var echec =[];
      var boardSize= 8;
      
      for( var i=0; i < boardSize; i++ ) {
        echec[i] = [];
        for( var j=0; j < boardSize; j++ ) {
          echec[i][j] = "";
        }
      } 
      console.log(echec)
    var trajet = []
    var moves =  [  [1,2],  [1,-2], [-1,2], [2,1],   [2,-1],  [-2,1],  [-2,-1], ]
   
                             
                              trajet.push([CHEVAL[0],CHEVAL[1],0]);
                              while(trajet.length != 0 ) {
                                var current = trajet.shift()
                                console.log(trajet);
                                for( var i=0 ; i < moves.length; i++ ) {
                                 var move = moves[i];
                                  var count = current[0]+1 ;
                                  var next_x = current[0] + move[0];
                                  var next_y = current[1] + move[1];
                                  if( next_x >= 0 && next_y >=0 && next_x < boardSize && next_y < boardSize && echec[next_x ][next_y ] != 1 ) {
                                    if( next_x == pointA[0] && next_y == pointA[1] ) {
                                      return (count  )}
                                    else {
                                      echec[next_x][next_y]!=0 ;
                                      echec[next_x][next_y]!=0 ;
                                      trajet.push([next_x, next_y]);}}}}
                                 
                              return 'Not possible'
                            }
                            var CHEVAL = [0,0];
                            var pointA = [4,1];
                          console.log(CHEVAL)
                          console.log (pointA)
     console.log( 'le nombre mini de pas pour atiendre pointA : ' +BFS(CHEVAL, pointA));
  