// Compare two dictionaries

let compare = (first_values, second_values) => {

  const firstKeys = Object.keys(first_values);
  const secondKeys = Object.keys(second_values);

  if (firstKeys.join("-") !== secondKeys.join("-")) return false;

  for (const key of firstKeys) {
    if (first_values[key] === second_values[key]) false;
  }

  return true;
};

module.exports = compare;
