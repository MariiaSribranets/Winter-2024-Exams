// Extract substring between prefix and suffix
'use strict';

const getValueBetween = (str, prefix, suffix) => {

  let initialIndex = str.indexOf(prefix);
  
  if (initialIndex === -1) return "";

  str = str.substring(initialIndex + prefix.length);
  initialIndex = str.indexOf(suffix);

  if (initialIndex === -1) return "";
  
  str = str.substring(0, initialIndex);
  
  return str;
};

module.exports = getValueBetween;
