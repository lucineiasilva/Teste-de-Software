import { describe, expect, it, jest} from "@jest/globals";
import AtendimentoController from "../controllers/AtendimentoController";
import atendimento from "../models/Atendimento";


describe('Deve retornar o teste unitário de Atendimento', ()=> {
    const dataAtendimento = new Date ();
    const objAtendimento = {

               
        nome: 'Lucineia Pacheco',
        cpf: '87270447268',
        nit: '4753',
        tipo: 'Atendimento',
        observacao: 'asfjkl',
        dataAtendimento: new Date(),
    
    
    };

    it("Deve retornar uma Instância do Atendimento", () =>{
        const atendimento = new atendimento(objAtendimento);
        expect(atendimento).toEqual(expect.objectContaining(objAtendimento));
    })
    
    it("Deve retornar o cadastro simulado com mock", () => {    const atendimento = new atendimentos(objAtendimento);
        AtendimentoController.cadastrarAtendimento = jest.fn().mockReturnValue({
        nome: "Fulano de tal",
        cpf: "01010101010",
        nit: "99999",
        tipo:"Auxílio alimentação" ,
        observacao: "jfajfajfja" ,
        dataAtendimento: dataAtendimento 

        })
            const retorno = AtendimentoController.cadastrarAtendimento();
            expect(retorno.nome).toEqual("Fulano de tal");
            expect(retorno).toHaveProperty("nome","Fulano de tal");
    })
})
