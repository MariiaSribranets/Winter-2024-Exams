// Find key by value
'use strict';

const find = (object, value) => {
  let keys = Object.keys(object);
  
  for(const key of keys){
    if(object[key] === value) return key;
  }
};

module.exports = find;
