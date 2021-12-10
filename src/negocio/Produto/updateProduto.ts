import Produto from '../../modelo/produto';
import Update from "../update";
import Entrada from '../../io/entrada';

export default class AtualizarProduto extends Update {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log(`\nInício da atualização de um produto`);
        let id = this.entrada.receberNumero('Por favor, digite o id de identificação do produto a ser atualizado: ')
        let nome = this.entrada.receberTexto('Por favor, digite o nome a ser atualizado: ')
        let valor = this.entrada.receberNumero('Por favor, digite o valor a ser atualizado: ')
        this.produtos.forEach(produto => {
            if(id === produto.id){
                produto.nome = nome
                produto.valor = valor
            }
        
        
        });
        console.log(`\nAtualização Concluida :)`);
    }
}


