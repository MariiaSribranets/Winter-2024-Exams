// Return an array without duplicates
'use strict';

const duplicate = (value, number) => {
  if (number <= 0) return [];

  let result = [];

  for (let i = 0; i < number; i++) {
    result[i] = value;
  }

  return result;
};

module.exports = duplicate;
