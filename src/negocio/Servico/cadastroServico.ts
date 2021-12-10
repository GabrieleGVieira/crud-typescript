import Cadastro from "../cadastro";
import Servico from '../../modelo/servico';
import Entrada from '../../io/entrada';

export default class CadastroServico extends Cadastro{
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()

    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro de um serviço`);
        let id = this.entrada.receberNumero('Por favor, digite um id de identificação para o serviço a ser cadastrado: ')
        let nomeServico = this.entrada.receberTexto('Por favor, digite um nome para o serviço a ser cadastrado: ')
        let valor = this.entrada.receberNumero('Por favor, digite o valor a ser cadastrado: ')
        let servico = new Servico()
        servico.id = id
        servico.nome = nomeServico
        servico.valor = valor
        this.servicos.push(servico)
        console.log(`\nCadastro concluído :)\n`);
    }
    
}