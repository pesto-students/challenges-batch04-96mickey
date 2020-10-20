function duplicateLetters(val) {
  if (typeof val !== 'string') {
    throw new Error('Input must be a string !');
  }

  // creating a cache memory to keep record of alphabets and their concurrency
  const cache = {};
  const arrOfAlphabets = val.split('');
  arrOfAlphabets.forEach(alphabet => {
    if (cache[alphabet]) {
      cache[alphabet] += 1;
    } else {
      cache[alphabet] = 1;
    }
  });

  // console.log(cache)

  // sorting the data to find concurrency in decreasing order
  const sortedAlphabet = Object.keys(cache).sort((a, b) => cache[b] - cache[a]);

  // If the largest concurrency greater than 1, return the number
  if (cache[sortedAlphabet[0]] > 1) {
    return cache[sortedAlphabet[0]];
  // eslint-disable-next-line no-else-return
  } else {
    return false;
  }
}

export {
  duplicateLetters,
};
