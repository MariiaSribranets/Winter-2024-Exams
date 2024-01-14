// Return an array without duplicates
'use strict';

const distinct = (data) => {
  return [...new Set(data)];
};

module.exports = distinct;
