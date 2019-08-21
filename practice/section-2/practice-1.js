"use strict";
function countSameElements(collection) {
  var result=[];
  var map=new Map();
  for (let i=0;i<collection.length;i++){
    if (map.get(collection[i])==null){
      map.set(collection[i],1)
    }else{
      map.set(collection[i],map.get(collection[i])+1);
    }
  }
    map.forEach(function(value,key){
    result.push({key:key,count:value}) 
    })



  return result;
}
