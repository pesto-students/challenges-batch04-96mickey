function rot13(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string !');
  }

  const bufferForChar = 13;
  let decodedString = '';

  for (const char of str) {
    // Regex to match only capital letters
    if (/^[A-Z]+$/i.test(char)) {
      let decodedCharCode = char.charCodeAt() + bufferForChar;
      if (decodedCharCode > 90) {
        decodedCharCode = decodedCharCode - 90 + 64;
      }
      decodedString += String.fromCharCode(decodedCharCode);
    } else {
      decodedString += char;
    }
  }
  return decodedString;
}

export {
  rot13,
};
