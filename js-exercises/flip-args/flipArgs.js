/* eslint-disable func-names */
function flipArgs(func) {
  return function (...args) {
    const reversedArguments = args.reverse();
    return func(...reversedArguments);
  };
}

export {
  flipArgs,
};
