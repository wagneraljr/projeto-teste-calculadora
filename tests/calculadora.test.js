const { somar, subtrair, multiplicar, dividir } = require('../src/calculadora.js');

// Descrevendo o conjunto de testes para a Calculadora
// Aqui usamos a função `describe` do Jest para agrupar os testes relacionados à Calculadora
describe('Testes de Unidade para a Calculadora', () => {

    test('Deve somar dois números corretamente', () => {
        // Aqui acontece a verificação
        expect(somar(5, 5)).toBe(10);
    });

});