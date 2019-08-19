"use strict";
function countSameElements(collection) {
  var result = [];
  var map = new Map();
  for (var i = 0; i < collection.length;) {
    var cnt = 0;
    for (var j = i; j < collection.length; j++) {
      if (collection[i] == collection[j]) {
        cnt++;
      }
    }
    result.push({ key: collection[i], count: cnt });
    i += cnt;
  }
  return result;
}
