'use strict';

function collectSameElements(collectionA, objectB) {
  var sameElements=[];
  var newCollectionB=objectB.value;
  for (var i=0;i<collectionA.length;i++){
    for (var j=0;j<newCollectionB.length;j++){
      if (collectionA[i]===newCollectionB[j]){
        sameElements.push(collectionA[i]);
      }
    }   
  }

  return sameElements;
  //return '实现练习要求，并改写该行代码。';
}
