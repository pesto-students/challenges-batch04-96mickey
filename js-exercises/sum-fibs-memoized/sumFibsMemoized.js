/* eslint-disable no-unused-vars */
function cacheFunction(callback) {
  /**
   * Saving responses as an object in cache
   * These objects will have property value, which holds the result of given function
   */
  const cache = {};
  return (...args) => {
    const argsToCompare = [...args];
    let value;
    if (cache[argsToCompare]) {
      // returning the result without function call
      value = cache[argsToCompare].value;
    } else {
      /**
       * Computing the result according to function passed,
       * and then save the response in cache.
       * Finally return the computed result
       */
      value = callback(...argsToCompare);
      cache[argsToCompare] = {
        value,
      };
    }
    return value;
  };
}

function sumFibs(n) {
  let oddSum = 0;
  let num = 0;
  let nextNum = 1;
  if (n === 0 || n === 1) {
    return 0;
  // eslint-disable-next-line no-else-return
  } else {
    while (nextNum <= n) {
      let sum = 0;

      // only add if the next value is odd
      if (nextNum % 2 !== 0) {
        oddSum += nextNum;
      }
      sum = num + nextNum;
      num = nextNum;
      nextNum = sum;
    }
  }
  return oddSum;
}

export { sumFibs, cacheFunction };
