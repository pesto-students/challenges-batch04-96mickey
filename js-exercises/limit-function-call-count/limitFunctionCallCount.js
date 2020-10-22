const limitFunctionCallCount = (func, count) => {
  let currentCount = 0;
  return function (...args) {
    if (currentCount < count) {
      currentCount += 1;
      return func(...args);
    }
    return null;
  };
};

export {
  limitFunctionCallCount,
};
