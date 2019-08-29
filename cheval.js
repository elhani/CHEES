






  var echec = []
  
  
  for( var i=0; i < width; i++ ) {
    echec[i] = [];
    for( var j=0; j < height; j++ ) {
      echec[i][j] = "";
    }
  } 
  console.log(echec);
var steps = function(sol) {
  
  var solution = "cheval Tour for "+width+" by "+height+" echec:\n";
  for (i = 0; i < width; i++) {
    for (j = 0; j < height; j++) {
      solution += sol[i][j] + "\t";
    }
    solution += "\n";
  }

  console.log(solution)
}


var solveKT = function() {

  var sol = new Array(width);
  for (i = 0; i < sol.length; i++) {
    sol[i] = new Array(height)
  }


  for (i = 0; i < width; i++) {
    for (j = 0; j < height; j++) {
      sol[i][j] = -1
    }
  }

  
  var xMove = [2, 1, -1, -2, -2, -1, 1, 2];
  var yMove = [1, 2, 2, 1, -1, -2, -2, -1];

 
  sol[0][0] = 0;


  if (solveKTUtil(0, 0, 1, sol, xMove, yMove) == 0) {
    
    return 0;
  } else {
    steps(sol);
  }
}



   var solveKTUtil = function(x, y, moves, sol, xMove, yMove) {
    var k, next_x, next_y;

    if (moves === width * height) {
        
        steps(sol);
      
        sol[x][y] = [3,1];
    }

 
  for (k = 0; k < 8; k++) {
    next_x = x + xMove[k];
    next_y = y + yMove[k];
    if (isValidmove(next_x, next_y, sol)) {
      sol[next_x][next_y] = moves;
      if (solveKTUtil(next_x, next_y, moves + 1, sol, xMove, yMove) == 1) {
        return 1;
      } else {
        sol[next_x][next_y] = -1; 
      }
    }
  }

  return 0;
}

   var isValidmove = function(x, y, sol) {
    return (x >= 0 && x < width && y >= 0 && y < height && sol[x][y] == -1);
  }

var width =5;
var height = 5;
solveKT();



