const assert = require("assert");

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten() {
  const arrayJoin = arrays.reduce((sum, next) => sum.concat(next));
  return arrayJoin;
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
