import { describe, expect, it, jest} from "@jest/globals";
import PessoaController from "../controllers/PessoaController";
import pessoas from "../models/Pessoa";

describe("deve retornar os testes Unitário de Pessoa", () =>{
    const dataPessoa = new  Date();
    const objPessoa = {
    

        nome: "Lucineia",
        cpf: "87270447268",
        nit: "4753",
        dataNascimento: dataPessoa,
        estrangeiro: false,
        pais:"Brasil",
        cep: "76984000",
        logradouro: "Rua 30",
        numero: "0838",
        bairro: "Berquélia",
        cidade: "Vilhena",
        estado: "Rondônia",
        telefone: "69-999996920",
        telefoneContato: "69-999996920"
        };
        
    it("Deve retornar uma Instancia de Pessoa",() => {
        const pessoa = new  pessoas (objPessoa)
        expect(pessoa).toEqual(expect.objectContaining(objPessoa));
    });



/**
*ListarPessoa []
*CadastrarPessoa []
*/
it ("Deve retornar o cadastro simulado com mock", () => {
const pessoa = new pessoas(objPessoa)
PessoaController.cadastrarPessoa = jest.fn().mockReturnValue({
        nome: "Lucineia",
        cpf: "87270447268",
        nit: "4753",
        dataNascimento: dataPessoa,
        estrangeiro: false,
        pais:"Brasil",
        cep: "76984000",
        logradouro: "Rua 30",
        numero: "0838",
        bairro: "Berquélia",
        cidade: "Vilhena",
        estado: "Rondônia",
        telefone: "69-999996920",
        telefoneContato: "69-999996920"
    
    });
    const retorno = PessoaController.cadastrarPessoa();
    expect(retorno).toEqual (expect.objectContaining({
    dataNascimento: expect.any(Date),...objPessoa,}));
    expect(PessoaController.cadastrarPessoa).toBeCalledTimes(1)
});
})

