import { flipArgs } from './flipArgs';

describe('flipArgs', () => {
  it('should return a function', () => {
    expect(typeof flipArgs()).toBe('function');
  });

  it('should match all the arguments in reverse order', () => {
    function returnArr(...args) {
      return args;
    }
    const flippedCallback = flipArgs(returnArr);
    const reversedArray = flippedCallback(1, 2, 3);
    expect(reversedArray[0]).toBe(3);
    expect(reversedArray[1]).toBe(2);
    expect(reversedArray[2]).toBe(1);
  });
});
