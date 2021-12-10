import Cliente from '../../modelo/cliente';
import Delete from "../delete";
import Entrada from '../../io/entrada';

export default class DeletarCliente extends Delete {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public deletar(): void {
        console.log(`\nInício para deletar um cliente`);
        let cpf = this.entrada.receberTexto('Por favor, digite o CPF do cliente a ser deletado: ')
        this.clientes.forEach(cliente => {
            if(cpf === cliente.getCpf.getValor){

                let index = this.clientes.indexOf(cliente)
                this.clientes.splice(index,1)
                
                
            }
        
        
        });
        console.log(`\nCliente Deletado :)`);
    }
}