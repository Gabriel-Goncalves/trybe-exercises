const { it, expect } = require('@jest/globals');
const { assertions } = require('expect');
const {getUserName, findUserById, users} = require('./exercicio02');

it('using resolves', () => {
    expect(getUserName(4)).resolves.toBe('Mark');
});

it('using reject', () => {
    expect(getUserName(7)).rejects.toEqual({ error: "User with 7 not found." });
})