import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemConsumo extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        
        
        let produtos : any = []
        let servicos : any = []
        
        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach((produto) =>{
                let idProd = produto.id
                produtos.push(idProd)
            } 
            )
            cliente.getServicosConsumidos.forEach((servico) =>{
                let idServ = servico.id
                servicos.push(idServ)
            } 
            )
          
        });

        let produtoTotal : any = []
        let servicoTotal : any = []

        let produtocontado = []
        
        produtos.forEach(produto => {
           let total = produtos.filter(x => x==produto).length
        
           
                produtoTotal.push({
                    id : produto,
                    quantidade : total
            
        })});
            
         

        servicos.forEach(servico => {
            let total = servicos.filter(x => x==servico).length
 
            servicoTotal.push({
                id : servico,
                quantidade : total
            })
         });

         servicoTotal = servicoTotal
                        .map(e => JSON.stringify(e))
                        .reduce((acc, cur) => (acc.includes(cur) || acc.push(cur), acc), [])
                        .map(e => JSON.parse(e));

         let ordemServ = servicoTotal.sort((a, b) => {
            return b.quantidade - a.quantidade;
          });


          produtoTotal = produtoTotal
                        .map(e => JSON.stringify(e))
                        .reduce((acc, cur) => (acc.includes(cur) || acc.push(cur), acc), [])
                        .map(e => JSON.parse(e));

          let ordemProd = produtoTotal.sort((a, b) => {
            return b.quantidade - a.quantidade;
          });
      
          
      
        console.log(
            "\nOs produtos mais consumidos"
          );
      
        ordemProd.forEach((prod) => {
                console.log("ID do Produto: " + prod.id);
                console.log("Quantidade: " + prod.quantidade);
                console.log(`--------------------------------------\n`);
        });


        console.log(
            "\nOs serviços mais consumidos"
          );
      
          ordemServ.forEach((serv) => {
                console.log("ID do Serviço: " + serv.id);
                console.log("Quantidade: " + serv.quantidade);
                console.log(`--------------------------------------\n`);
        });

        
        console.log(`\n`);
    }
}