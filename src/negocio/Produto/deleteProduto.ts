import Produto from '../../modelo/produto';
import Delete from "../delete";
import Entrada from '../../io/entrada';

export default class DeletarProduto extends Delete {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public deletar(): void {
        console.log(`\nInício para deletar um produto`);
        let id = this.entrada.receberNumero('Por favor, digite o id de identificação do produto a ser deletado: ')
        this.produtos.forEach(produto => {
            if(id === produto.id){
                this.produtos.splice(produto.id,1)  
            }
        });
        console.log(`\nProduto Deletado :)`);
    }
}