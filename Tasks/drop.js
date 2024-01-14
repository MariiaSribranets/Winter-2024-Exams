// Delete listed keys from dictionary
'use strict';

const dropKeys = (dictionary, ...deleteKeys) => {
  const keys = Object.keys(dictionary);
  
  for(const key of keys){
    if (deleteKeys.includes(key)) delete dictionary[key];
  }
  
  return dictionary;
};

module.exports = dropKeys;
