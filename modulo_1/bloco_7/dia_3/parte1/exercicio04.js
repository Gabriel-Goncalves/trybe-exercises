const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

let expected = myFizzBuzz(15);
assert.strictEqual(expected, 'fizzbuzz');
expected = myFizzBuzz(9);
assert.strictEqual(expected, 'fizz');
expected = myFizzBuzz(10);
assert.strictEqual(expected, 'buzz');
expected = myFizzBuzz(11);
assert.strictEqual(expected, 11);
expected = myFizzBuzz('9');
assert.strictEqual(expected, false);


