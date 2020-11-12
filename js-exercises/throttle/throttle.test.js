import { throttle } from "./throttle";

describe("throttle", () => {
    test('function should return a Function', () => {
        const foo = function (x) {
            return x;
          };
          const time = 1000;
        expect(typeof throttle(foo, time)).toBe('function');
      });
});
