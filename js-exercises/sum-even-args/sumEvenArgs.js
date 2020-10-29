const sumEvenArgs = (...args) => {
  return args.reduce((sum, number) => {
    if(typeof number !== "number") {
      throw new Error(`Input must be a number, received ${typeof number} !`)
    }
    return (number % 2 === 0 ? (sum + number) : sum)
  }, 0);
};

export { sumEvenArgs };
