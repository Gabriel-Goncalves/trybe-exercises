const assert = require('assert');

const wordLengths = (words) => {
    let arr = [];
    for (let index = 0; index < words.length; index++) {
        arr.push(words[index].length);
    }
    return arr;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);