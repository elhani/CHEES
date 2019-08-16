
  var echec = []
  var trejet = []
  var M=10;
  for( var i=0; i < M; i++ ) {
    echec[i] = [];
    for( var j=0; j < M; j++ ) {
      echec[i][j] = 0;
    }
  } 
console.log(echec)

function chesscheval(cell) {
    var possibleCoordinates = [];
  var cellX=0;
  var cellY=0;
    
    
    //Find all possible X Positions
    var cellXpositions = [cellX + 2, cellX - 2, cellX + 1, cellX - 1].filter(function(cellPosition) {
        return (cellPosition > 0 && cellPosition < M);
    })
    
    //Find all possible Y Positions
    var cellYpositions = [cellY + 2, cellY - 2, cellY + 1, cellY - 1].filter(function(cellPosition) {
        return (cellPosition > 0 && cellPosition < M);
    })
    
    

    for (var i = 0; i < cellXpositions.length; i++) {
        for (var j = 0; j < cellYpositions.length; j++) {
            if (Math.abs(cellX - cellXpositions[i]) + Math.abs(cellY - cellYpositions[j]) === 3) {
                console.log('This is a valid coordinate: ', [cellXpositions[i], cellYpositions[j]]);
                if (!possibleCoordinates.includes([cellXpositions[i], cellYpositions[j]])) {
                    possibleCoordinates.push([cellXpositions[i], cellYpositions[j]]);
                   
                } 
            }
        }
    }
    console.log('Possible Coordinates:', possibleCoordinates);
    console.log ('Possible Moves:', possibleCoordinates.length);
    return possibleCoordinates.length;


    
}
chesscheval();


var findMinSteps = function(depart, pointA) {
        
    var trajet = []
    var moves =  [  [1,2],  [1,-2], [-1,2], [2,1],   [2,-1],  [-2,1],  [-2,-1], ]
   
                         
                              
                              echec[depart[0]][depart[1]] !=0  ;
                              trajet.push([depart[0],depart[1],0]);
                              while(trajet.length != 0 ) {
                                var current = trajet.shift()
                                console.log(trajet);
                                for( var i=0 ; i < moves.length; i++ ) {
                                  var move = moves[i];
                                  var count = current[0]+1 ;
                                  var cellx = current[0] + move[0];
                                  var celly = current[1] + move[1];
                                  if( cellx >= 0 && celly >=0 && cellx < M && celly < M && echec[cellx ][celly ] != 1 ) {
                                    if( cellx == pointA[0] && celly == pointA[1] ) {
                                      return (count  )
                                      
                                    }
                                    else {
                                      echec[cellx][celly] = 1;
                                      trajet.push([cellx, celly]);
                                     
                                    }
                                  }
                                }
                              }
                              return 'Not possible'
                            }
                            

                            var depart = [0,0];
                            var pointA = [4,1];
                          console.log(depart)
                          console.log (pointA)
                            console.log( 'le nombre mini de pas pour atiendre pointA : ' +findMinSteps(depart, pointA));