const { it, expect } = require('@jest/globals');
const encode = require('./encode');

describe('Parte 2', () => {
    it('encode é função', () => {
        expect(typeof encode.encode).toBe('function');
    });
    it('decode é função', () => {
        expect(typeof encode.decode).toBe('function');
    });
    it('converte aeiou para 12345', () => {
        expect(encode.encode('aeiou')).toBe('12345');
    });
    it('converte 12345 para aeiou', () => {
        expect(encode.decode('12345')).toBe('aeiou');
    });
    it('outras letras', () => {
        expect(encode.encode('rtqlkmn')).toBe('rtqlkmn');
    });
    it('mesma quantidade de caracteres', () => {
        expect(encode.encode('abcdefghij').length).toBe(10);
    });
})