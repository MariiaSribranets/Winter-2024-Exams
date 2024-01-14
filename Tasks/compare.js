// Compare two dictionaries

let compare = (first_values, ...parameters_LIST) => {
  const second_values = parameters_LIST[0];
  let firstKeys = Object.keys(first_values);
  let secondKeys = Object.keys(second_values);
  if (firstKeys.join('-') !== secondKeys.join('-')) return false;
  for (key of firstKeys) {
    if (first_values[key] === second_values[key]) false;
  }
  return true;
};

module.exports = compare;
