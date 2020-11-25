const assert = require("assert");

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const myArray = [1, 2, 3, 4];
let expected = myRemove(myArray, 3);
assert.strictEqual(typeof myRemove, "function");
assert.deepStrictEqual(expected, [1, 2, 4]);
assert.notDeepStrictEqual(expected, myArray);
assert.deepStrictEqual(myArray, [1, 2, 3, 4]);
expected = myRemove(myArray, 5);
assert.deepStrictEqual(expected, [1, 2, 3, 4]);
