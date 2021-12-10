import Cliente from '../../modelo/cliente';
import Update from "../update";
import Entrada from '../../io/entrada';
import Produto from '../../modelo/produto';
import Servico from '../../modelo/servico';

export default class AtualizarConsumo extends Update {

    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private entrada: Entrada
  
    constructor(
      clientes: Array<Cliente>,
      produtos: Array<Produto>,
      servicos: Array<Servico>
    ) {
      super();
      this.clientes = clientes;
      this.produtos = produtos;
      this.servicos = servicos;
      this.entrada = new Entrada()
    }
    
   
    public atualizar(): void {
        console.log(`\nInício cadastro de consumo do cliente`);
        let cpf = this.entrada.receberTexto('Por favor, digite o CPF do cliente: ')
        this.clientes.forEach(cliente => {
            if(cpf === cliente.getCpf.getValor){
                let execucao = true
                while (execucao) {
                    console.log(`O que cliente consumiu?`);
                    console.log(`1 - Produto`);
                    console.log(`2 - Serviço`);
                    console.log(`0 - Sair`);
                
                    let entrada = new Entrada()
                    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
                
                    switch (opcao) {
                        case 1:
                            let idProduto = this.entrada.receberNumero('Por favor, digite o id do produto consumido: ')
                            this.produtos.forEach((produto) => {
                                if (produto.id == idProduto) {
                                  cliente.getProdutosConsumidos.push(produto);
                                } 
                              });
                            break;
                        case 2:
                            let idServico = this.entrada.receberNumero('Por favor, digite o id do serviço consumido: ')
                            this.servicos.forEach((servico) => {
                                if (servico.id == idServico) {
                                  cliente.getServicosConsumidos.push(servico);
                                } 
                              });
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
