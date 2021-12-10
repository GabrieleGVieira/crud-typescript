import Cadastro from "../cadastro";
import Produto from '../../modelo/produto';
import Entrada from '../../io/entrada';

export default class CadastroProduto extends Cadastro{
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()

    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro de um produto`);
        let id = this.entrada.receberNumero('Por favor, digite um id de identificação para o produto a ser cadastrado: ')
        let nomeProduto = this.entrada.receberTexto('Por favor, digite um nome para o produto a ser cadastrado: ')
        let valor = this.entrada.receberNumero('Por favor, digite o valor do produto a ser cadastrado: ')
        let produto = new Produto()
        produto.id = id
        produto.nome = nomeProduto
        produto.valor = valor
        this.produtos.push(produto)
        console.log(`\nCadastro concluído :)\n`);
    }
    
}