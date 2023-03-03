import{describe, expect, test, it} from '@jest/globals';
import {soma,subtracao,multiplicacao,divisao} from '../index.js'


describe('Testes de calculadora com valores inteiro ', () => {
    it('Deve retornar a soma de dois valores inteiro', () => {
        const esperado = 30;
        const retornado = soma(10,20);
        expect(retornado).toBe(esperado);
    });


});
describe('Testes de calculadora com valores flutuante ', () => {
    it('Deve retornar a soma de dois valores flutuante', () => {
        const esperado = 26;
        const retornado = soma(15.5,10.5);
        expect(retornado).toBeCloseTo(esperado);
    });


});
describe('Testes de calculadora com valores negativos ', () => {
    it('Deve retornar a soma de dois valores negativos', () => {
        const esperado = -25;
        const retornado = soma(-10,-15);
        expect(retornado).toBe(esperado);
    });


});

