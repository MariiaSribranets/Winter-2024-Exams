// Filter array by type name
'use strict';

const filter = (array, type) => {
  return array.filter((item) => typeof item === type);
};

module.exports = filter;
