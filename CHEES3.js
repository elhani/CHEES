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
                         var cellX ;
                         var cellY;

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
//le pointA chercher par le cheval

var pointA = Object.create(echec)  ;
                        
                          var ycordinatpointA;
                          var xcordinatpointA;


                          pointA.xcordinatpointA=7;
                          pointA.ycordinatpointA=1;

                          console.log(pointA);
                                                

console.log(Movecheval());
console.log(shortcircuit());
                          
function Movecheval(cellX,cellY){

    
    var xcordinatcheval = [ '0', '1', '2', '3', '4', '5', '6', '7'  ];
    
    
         console.log(xcordinatcheval);
    
    
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

       //position cheval 
     
       var cellX = 0;
       var cellY =0 ;

      var cellXpositions = [cellX + 2, cellX - 2, cellX + 1, cellX - 1].filter(function(cellPosition) {
                       
    
                                  return (cellPosition > 0 && cellPosition < 7);
                                          })
    
       console.log(cellXpositions);
       
       
      var cellYpositions = [cellY + 2, cellY - 2, cellY + 1, cellY - 1].filter(function(cellPosition) {
    
                                   return (cellPosition > 0 && cellPosition < 7);
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
                  console.log(cellX);
                  console.log(cellY);
                  return possiblemove.length;
                              }
                                              
function shortcircuit(cellX, cellY,dp, xcordinatpointA, ycordinatpointA){
                  
    var dp=[xdp][ydp];
    
    
  var xcordinatpointA = 7;
   var ycordinatpointA=1;
               var cellY=0;
                 var cellX=0;
 
    
var dp = Object.create(echec)  ;
var xdp ;
  var ydp ;


     
       xdp=Math.abs( cellX-xcordinatpointA);
       ydp=Math.abs(cellY-ycordinatpointA);

  
{ 
     
    if (cellX == xcordinatpointA && cellY == ycordinatpointA) 
    return (dp[xdp][ydp]);  
    
 else                                        
if  
  (cellX< xcordinatpointA)  
{ if (cellY<=ycordinatpointA) 
  {
    cellX==cellX+2;cellY==cellX+1;
    
    return (dp[xdp][ydp]); 
  }

  
else{
  cellX==cellX+2;cellY==cellX-1;  return (dp[xdp][ydp]); 
 
}
} 


if(cellY<=ycordinatpointA)
         {
       cellX==cellX-2;cellY==cellX+1; return (dp[xdp][ydp]); 
       
         }
else{
  cellX==cellX-2;cellY==cellX-1; return (dp[xdp][ydp]); 
      
}
}
  


}
