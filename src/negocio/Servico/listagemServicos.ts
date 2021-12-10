import Servico from '../../modelo/servico';
import Listagem from "../listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nListagem de serviços oferecidos:`);
        this.servicos.forEach(servico => {
            console.log(`\nNúmero de Identificação: ` + servico.id);
            console.log(`Tipo de Serviço: ` + servico.nome);
            console.log('Valor: R$ ' + servico.valor)
            console.log(`--------------------------------------`);
            
        });
        console.log(`\n`);
    }
}