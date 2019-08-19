'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = [];
  var map = new Map();
  for (var i = 0; i < collectionA.length;) {
    var cnt = 0;
    for (var j = i; j < collectionA.length; j++) {
      if (collectionA[i] == collectionA[j]) {
        cnt++;
      }
    }
    result.push({ key: collectionA[i], count: cnt });
    i += cnt;
  }
  //return result;

  var  collectionB = objectB.value;
  for (var i = 0;i < result.length;i++)
  {

    for (var j = 0;j<collectionB.length;j++)
    {
      if (result[i].key == collectionB[j])
      {
        var temp = result[i].count % 3;
        var  a = (result[i].count - temp) / 3;
        result[i].count = result[i].count - a;
      }
    }
  }
  return result;
 // return '实现练习要求，并改写该行代码。';
}
