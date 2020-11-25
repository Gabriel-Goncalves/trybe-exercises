const assert = require('assert');

const addAllnumbers = (numbers) => {
    let sum = null;
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
    }
    return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);