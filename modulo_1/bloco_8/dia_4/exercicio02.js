const assert = require("assert");

const sum = (...args) => {
  const sum = args.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return sum;
};

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);
