// Copy all values from dict except listed
'use strict';

const except = (dict_values, ...exceptValues) => {
  const keys = Object.keys(dict_values);
  let dictionary = {}

  for(const key of keys){
    if (!exceptValues.includes(key)) dictionary[key] = dict_values[key];
  }

  return dictionary;
};

module.exports = except;
