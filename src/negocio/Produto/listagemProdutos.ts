import Produto from '../../modelo/produto';
import Listagem from "../listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nListagem de produtos disponíveis:`);
        this.produtos.forEach(produto => {
            console.log(`\nNúmero de Identificação: ` + produto.id);
            console.log(`Nome do Produto: ` + produto.nome);
            console.log('Valor: R$ ' + produto.valor)
            console.log(`--------------------------------------`);
            
        });
        console.log(`\n`);
    }
}