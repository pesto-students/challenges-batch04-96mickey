// You can change the `args`
function bind(func, obj) {
  return (...args) => func.apply(obj, args);
}

module.exports = { bind };
