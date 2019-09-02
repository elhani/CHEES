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


var cheval=Object.create(echec);


var pointA=Object.create(echec);

var findMinSteps = function(cheval, pointA) {
      
  var trajet = []
  var moves =  [ [1,2],  [1,-2], [-1,2], [-1,-2], [2,1],  [2,-1],   [-2,1],[-2,-1] ]
                 
   echec[cheval[0]][cheval[1]] !=0  ;
  trajet.push([cheval[0],cheval[1],0]);

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
                                        return (count)}
    else {echec[cellx][celly] = 1;
                   
          trajet.push([cellx, celly]);}}}}  
              return "NOT DIFINE"
                 }
       var cheval = [0,0]; var pointA = [2,2];
                        
console.log(cheval,pointA)
console.log( 'le nombre mini de pas pour atiendre pointA : ' +findMinSteps(cheval, pointA), ); 
