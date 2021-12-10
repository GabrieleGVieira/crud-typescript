import Servico from '../../modelo/servico';
import Delete from "../delete";
import Entrada from '../../io/entrada';

export default class DeletarServico extends Delete {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public deletar(): void {
        console.log(`\nInício para deletar um serviço`);
        let id = this.entrada.receberNumero('Por favor, digite o id de identificação do serviço a ser deletado: ')
        this.servicos.forEach(servico => {
            if(id === servico.id){
                this.servicos.splice(servico.id,1)    
            }
        
        
        });
        console.log(`\nProduto Deletado :)`);
    }
}