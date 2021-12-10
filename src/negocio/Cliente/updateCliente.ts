import Cliente from '../../modelo/cliente';
import Update from "../update";
import Entrada from '../../io/entrada';

export default class AtualizarCliente extends Update {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log(`\nInício da atualização de um cliente`);
        let cpf = this.entrada.receberTexto('Por favor, digite o CPF do cliente a ser atualizado: ')
        this.clientes.forEach(cliente => {
            if(cpf === cliente.getCpf.getValor){
                let execucao = true
                while (execucao) {
                    console.log(`O que você deseja atualizar?`);
                    console.log(`1 - Nome`);
                    console.log(`2 - Nome Social`);
                    console.log(`3 - Gênero`);
                    console.log(`0 - Sair`);
                
                    let entrada = new Entrada()
                    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
                
                    switch (opcao) {
                        case 1:
                            let nome = this.entrada.receberTexto('Por favor, digite o nome a ser atualizado: ')
                            cliente.nome = nome
                            break;
                        case 2:
                            let nomeSocial = this.entrada.receberTexto('Por favor, digite o nome social a ser atualizado: ')
                            cliente.nomeSocial = nomeSocial
                            break;
                        case 3:
                            let genero = this.entrada.receberTexto('Por favor, digite o nome a ser atualizado: ')
                            cliente.genero = genero
                            break;
                        case 0:
                            execucao = false
                            console.log(`Até mais`)
                            break;
                        default:
                            console.log(`Operação não entendida :(`)
                
            }
        
        
                }}});
        console.log(`\nAtualização Concluida :)`);
    }
}
