'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var  collectionB = objectB.value;
  for (var i = 0;i < collectionA.length;i++)
  {

    for (var j = 0;j<collectionB.length;j++)
    {
      if (collectionA[i].key == collectionB[j])
      {
        var newKey = collectionA[i].count % 3;
        var  result = (collectionA[i].count - newKey) / 3;
        collectionA[i].count = collectionA[i].count - result;
      }
    }
  }
  return collectionA;
  //return '实现练习要求，并改写该行代码。';
}
