'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var valueVbjectB=objectB.value;
  for(let i=0;i<collectionA.length;i++){
    for (let j=0;j<valueVbjectB.length;j++){
      if (collectionA[i].key==valueVbjectB[j]){
        collectionA[i].count=collectionA[i].count-1;       
      }
    }
  }
  return collectionA;
}
