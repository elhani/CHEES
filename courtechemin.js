//creation matrix 2 dimention 
M = 8;
var echec = new Array(M) ;
for(var i=0 ; i<M; i++) {
    echec[i] =[''];
    for(var j=0; j<M; j++) {
      echec[i][j]="[" + i + "," + j + "]";
               
    }
};

console.log(echec);
var pointA;
var distance;
var cheval;


//creation objet cheval
var cheval = Object.create(echec);
cellX=0;
cellY=0;

                         cheval.cellX ;
                         cheval.cellY ;

                         chevalMoves = [
                            {cellX:2, cellY:-1},
                            {cellX:2, cellY:1},
                            {cellX:1, cellY:-2},
                            {cellX:1, cellY:2},
                            {cellX:-2, cellY:-1},
                            {cellX:-2, cellY:1},
                            {cellX:-1, cellY:-2},
                            {cellX:-1, cellY:2}
                          ]
                         
                        console.log(chevalMoves);

                        console.log(cheval);
//creation Object  pointA chercher par le cheval

var pointA = Object.create(echec)  ;
                        
                          var ycordinatpointA;
                          var xcordinatpointA;


                          

                          console.log(pointA);
                                                

console.log(Movecheval());

                      
function Movecheval(cellX,cellY){

    cellX=0;
    cellY=0;
    
    
     var possiblemove =Object.create(echec) ;
    
    
        possiblemove.cellXpositions= function()
                                 {
                                    
                                 return   [cellXpositions[i], cellYpositions[j]] ;
                                 }
    
        console.log(possiblemove.cellXpositions) ;  
       ;                   
       possiblemove.cellYpositions= function()
                                  {
      
                                   return   [cellXpositions[i], cellYpositions[j]] ; 
    
                                  }
       console.log(possiblemove.cellYpositions) ;

      

      var cellXpositions = [cellX + 2, cellX - 2, cellX + 1, cellX - 1].filter(function(cellPosition) {
                       
    
                                  return (cellPosition > 0 && cellPosition < M-1);
                                          })
    
       console.log(cellXpositions);
       
       
      var cellYpositions = [cellY + 2, cellY - 2, cellY + 1, cellY - 1].filter(function(cellPosition) {
    
                                   return (cellPosition > 0 && cellPosition < M-1);
                                   })
       console.log(cellYpositions);

            for (var i = 0; i < cellXpositions.length; i++) {
            for (var j = 0; j < cellYpositions.length; j++) {
              if (Math.abs(cellX - cellXpositions[i]) + Math.abs(cellY - cellYpositions[j])===3 )
                {
                      console.log('This is a valid coordinate: ', [cellXpositions[i], cellYpositions[j]]);
                         if (!possiblemove.includes([cellXpositions[i], cellYpositions[j]])) { 

                          
                          possiblemove.push([cellXpositions[i], cellYpositions[j]]);
                         
                                } 
                                }
                                    }
                                }
    
                 console.log('Possible Coordinates:', possiblemove);
                  console.log ('Possible Moves:', possiblemove.length);
                 
                 
                  return possiblemove.length;
                              }
                                              
  

     var findMinSteps = function(cheval, pointA) {
        
      var distance = []
      var moves =  [  [1,2],  [1,-2], [-1,2], [2,1],   [2,-1],  [-2,1],  [-2,-1], ]
     
      var echec = []
      var M=10;
      for( var i=0; i < M; i++ ) {
        echec[i] = [];
        for( var j=0; j < M; j++ ) {
          echec[i][j] = 0;
        }
      }                      
                                
                                echec[cheval[0]][cheval[1]] = 1;
                                distance.push([cheval[0],cheval[1],0])
                                while(distance.length > 0 ) {
                                  var current = distance.shift()
                                 
                                  for( var i=0 ; i < moves.length; i++ ) {
                                    var move = moves[i];
                                    var count = current[2] + 1;
                                    var cellx = current[0] + move[0];
                                    var celly = current[1] + move[1];
                                    if( cellx >= 0 && celly >=0 && cellx < M && celly < M && echec[cellx ][celly ] != 1 ) {
                                      if( cellx == pointA[0] && celly == pointA[1] ) {
                                        return (count)
                                        
                                      }
                                      else {
                                        echec[cellx][celly] = 1;
                                        distance.push([cellx, celly, count]);
                                       
                                      }
                                    }
                                  }
                                }
                                return 'Not possible'
                              }
                              
      
                              var cheval = [0,0];
                              var pointA = [4,1];
                           // afiche le nombre minimum de pas pour ateidre le pointA
                              console.log(findMinSteps(cheval, pointA));

      
       

     

       

                            
