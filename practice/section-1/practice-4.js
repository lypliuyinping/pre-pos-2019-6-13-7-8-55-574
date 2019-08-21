'use strict';

function collectSameElements(collectionA, objectB) {
    var sameElements=[];
    //var newCollectionA=[];
    for (var i=0;i<collectionA.length;i++){
      for (var j=0;j<objectB.value.length;j++){
     // newCollectionA.push(collectionA[i].key);
    if (collectionA[i].key==objectB.value[j]){
      sameElements.push(collectionA[i].key)
    }
      }
    }
    return sameElements;
}
