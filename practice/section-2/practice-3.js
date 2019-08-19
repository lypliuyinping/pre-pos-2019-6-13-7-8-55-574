"use strict";

function countSameElements(collection) {
  var result = [];
  var map = new Map();
  var ele, num;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].length == 1) {
      if (map.get(collection[i]) == null) {
        map.set(collection[i], 1);
      } else {
        map.set(collection[i], map.get(collection[i]) + 1);
      }
    } else if (collection[i].length == 5) {
      ele = collection[i][0];
      num = Number(collection[i][2] + collection[i][3]);
      if (map.get(ele) == null) {
        map.set(ele, num);
      } else {
        map.set(ele, map.get(ele) + num);
      }
    } else {
      ele = collection[i][0];
      num = Number(collection[i][2]);
      if (map.get(ele) == null) {
        map.set(ele, num);
      } else {
        map.set(ele, map.get(ele) + num);
      }
    }
  }
  console.log(map);
  map.forEach(function(key, value) {
    result.push({ name: value, summary: key });
  });
  return result;
}
