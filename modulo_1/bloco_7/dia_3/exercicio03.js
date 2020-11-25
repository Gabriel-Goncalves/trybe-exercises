const assert = require("assert");

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

let expected = myRemoveWithoutCopy([1, 2, 3, 4], 3);
assert.deepStrictEqual(expected, [1, 2, 4]);
assert.notDeepStrictEqual(expected, [1, 2, 3, 4]);
assert.notDeepStrictEqual(expected, [1, 2, 3, 4]);
expected = myRemoveWithoutCopy([1, 2, 3, 4], 5);
assert.deepStrictEqual(expected, [1, 2, 3, 4]);
