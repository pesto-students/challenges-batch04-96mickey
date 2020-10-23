function abbreviateString(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string !');
  }

  const letterSet = str.split(' ');
  /**
   * Assumptions:
   *    Input string must have more than one letter
   *    Last letter cannot be special character or number
   *    First character of first letter will be capital in input string
   */
  return `${letterSet[0]} ${letterSet[letterSet.length - 1][0].toUpperCase()}.`;
}

export { abbreviateString };
