import Cliente from "./cliente"
import Servico from "./servico"
import Produto from "./produto"

export default class Consumo {
    private cliente: Cliente
    private servico: Servico
    private produto: Produto

    constructor (cliente: Cliente, servico: Servico, produto: Produto){
        this.cliente = cliente
        this.servico = servico
        this.produto = produto
    }

    public get getCliente(): Cliente {
        return this.cliente
    }

    public get getServico(): Servico {
        return this.servico
    }

    public get getProduto(): Produto {
        return this.produto
    }
}