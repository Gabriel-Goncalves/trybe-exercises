const assert = require('assert')

const sum = (...args) => {
    let sum = 0;
    for (let index = 0; index < args.length; index += 1) {
        sum += args[index];
    }
    return sum;
}

assert.strictEqual(sum(), 0)
assert.strictEqual(sum(1), 1)
assert.strictEqual(sum(1, 2), 3)
assert.strictEqual(sum(1, 2, 3), 6)
assert.strictEqual(sum(1, 2, 3, 4), 10)