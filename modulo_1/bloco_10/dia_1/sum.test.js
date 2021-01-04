const { it, expect } = require('@jest/globals');
const sum = require('./sum');

describe('Parte 1', () => {
    it('requisito 2 soma de 4 e 5 é 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
    it('requisito 3 soma de 0 e 0 é 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    it('requisito 4 soma com string da erro', () => {
        expect(() => { sum(4, '5') }).toThrow();
    });
    it('requisito 5 soma com string da erro e retorna a mensagem esperada', () => {
        expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
    });
})