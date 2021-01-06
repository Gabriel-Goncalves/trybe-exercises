const uppercase = require('./exercicio01');


it('should be all letters in uppercase', () => {
    uppercase('teste', (letters) => {
        expect(letters).toBe('TESTE');
    });
})