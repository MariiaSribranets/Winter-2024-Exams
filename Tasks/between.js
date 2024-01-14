// Extract substring between prefix and suffix

getValueBetween = (str, prefix, suffix) => {
  initialIndex = str.indexOf(prefix);
  if (initialIndex === -1) return '';
  else {
    str = str.substring(initialIndex + prefix.length);
    if (suffix) {
      initialIndex = str.indexOf(suffix);
      if (initialIndex === -1) {
        return '';
      } else {
        str = str.substring(0, initialIndex);
      }
    }
  }
  return str;
};

module.exports = getValueBetween;
