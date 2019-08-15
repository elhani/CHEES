



     var findMinSteps = function(cheval, pointA) {
        
      var trajet = []
      var moves =  [  [1,2],  [1,-2], [-1,2], [2,1],   [2,-1],  [-2,1],  [-2,-1], ]
     
      var echec = []
      var M=10;
      for( var i=0; i < M; i++ ) {
        echec[i] = [];
        for( var j=0; j < M; j++ ) {
          echec[i][j] = '♘';
        }
      }                      
         
      console.log(echec);
      

                                echec[cheval[0]][cheval[1]] =1  ;
                                trajet.push([cheval[0],cheval[1],0])
                                while(trajet.length > 0 ) {
                                  var current = trajet.shift()
                                  console.log(trajet);
                                  for( var i=0 ; i < moves.length; i++ ) {
                                    var move = moves[i];
                                    
                                    var count = current[0] +1;
                                    var cellx = current[0] + move[0];
                                    var celly = current[1] + move[1];
                                    if( cellx >= 0 && celly >=0 && cellx < M && celly < M && echec[cellx ][celly ] != 1 ) {
                                      if( cellx == pointA[0] && celly == pointA[1] ) {
                                        return (count  )
                                        
                                      }
                                      else {
                                      
                                        trajet.push([cellx, celly]);
                                       
                                      }
                                    }
                                  }
                                }
                                return 'Not possible'
                              }
                              

                              var cheval = [0,0];
                              var pointA = [4,1];
                            console.log(cheval)
                            console.log (pointA)
                              console.log(findMinSteps(cheval, pointA));