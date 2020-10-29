
function removeFalsyValues(array) {
  if(!Array.isArray(array)) {
    throw new Error(`Input must be an array of values, received ${typeof array}`);
  }

  return array.filter(item => !!item);
}

export {
  removeFalsyValues,
};
