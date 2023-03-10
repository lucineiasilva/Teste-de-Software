import { describe, expect, test, it } from '@jest/globals';
import { soma, subtracao, multiplicacao, divisao } from '../index.js'


describe('Testes de calculadora com valores inteiro ', () => {
    it('Deve retornar a soma de dois valores inteiro', () => {
        const esperado = 30;
        const retornado = soma(10, 20);
        expect(retornado).toBe(esperado);
    });


});
describe('Testes de calculadora com valores flutuante ', () => {
    it('Deve retornar a soma de dois valores flutuante', () => {
        const esperado = 26;
        const retornado = soma(15.5, 10.5);
        expect(retornado).toBeCloseTo(esperado);
    });


});
describe('Testes de calculadora com valores negativos ', () => {
    it('Deve retornar a soma de dois valores negativos', () => {
            const esperado = -25;
            const retornado = soma(-10, -15);
            expect(retornado).toBe(esperado);
    });


});
describe('Testes de calculadora com valores inteiro ', () => {
    it('Deve retornar a subtração de dois valores inteiro', () => {
            const esperado = 30;
            const retornado = subtracao(50, 20);
            expect(retornado).toBe(esperado);
    });
});

describe('Testes de calculadora com valores flutuante ', () => {
    it('Deve retornar a subtração de dois valores flutuante', () => {
            const esperado = 5;
            const retornado = subtracao(15.5, 10.5);
            expect(retornado).toBeCloseTo(esperado);
        });
});
describe('Testes de calculadora com valores negativos ', () => {
    it('Deve retornar a subtração de dois valores negativos', () => {
            const esperado = -25;
            const retornado = subtracao(-10, -15);
            expect(retornado).toBe(esperado);
            });
});           
describe('Testes de Calculadora com valores inteiros', () => {
    it('Deve retornar a multipicação de dois valores inteiro', () => {
             const esperado = 10;
             const retornado = multiplicacao(2,5);
             expect(retornado).toBe(esperado);
        });
});
describe('Testes de Calculadora com valores flutuante', () => {
    it('Deve retornar a multipicação de dois valores flutuante', () => {
            const esperado = 5;
            const retornado = multiplicacao(2.5,2.0);
             expect(retornado).toBe(esperado);
            });
});
describe('Testes de Calculadora com valores flutuante', () => {
    it('Deve retornar a multipicação de dois valores flutuante', () => {
            const esperado = 5;
            const retornado = multiplicacao(2.5,2.0);
            expect(retornado).toBe(esperado);
                
    });

});
describe('Testes de Calculadora com valores negativos', () => {
    it('Deve retornar a multipicação de dois valores negativo', ()=> {
            const esperado = 8;
            const retornado = multiplicacao(-2,-4);
            expect(retornado).toBe(esperado);
                
    });


});

