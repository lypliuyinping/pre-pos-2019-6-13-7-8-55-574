'use strict';

function collectSameElements(collectionA, collectionB) {
  var newArry=[];
  var newCollectionB=collectionB[0];
  for (var j=0;j<collectionA.length;j++){
  for (var i=0;i<newCollectionB.length;i++){
    if (collectionA[j]===newCollectionB[i]){
      newArry.push(collectionA[j]);
      break;
    } 
  }
}
  return newArry;
}
