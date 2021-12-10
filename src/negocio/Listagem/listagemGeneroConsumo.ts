import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";


export default class ListageConsumoGenero extends Listagem {
  private clientes: Array<Cliente>;
  constructor(
    clientes: Array<Cliente>,
  ) {
    super();
    this.clientes = clientes;
    
  }

  public listar(): void {
    

    let fem: any = [];
    let masc: any = [];
    let outro: any = [];

    this.clientes.forEach((cliente: { genero: string; }) => {
        if (parseInt(cliente.genero) == 1) {
          fem.push(cliente);
        } else if (parseInt(cliente.genero) == 2) {
          masc.push(cliente);
        } else if (parseInt(cliente.genero) == 3) {
          outro.push(cliente);
        }
      });


    let produtosFem : any = []
    let servicosFem : any = []
      fem.forEach(cliente => {
        cliente.getProdutosConsumidos.forEach((produto) =>{
            let idProd = produto.id
            produtosFem.push(idProd)
        } 
        )
        cliente.getServicosConsumidos.forEach((servico) =>{
            let idServ = servico.id
            servicosFem.push(idServ)
        } 
        )
      
    });

    let produtosMasc : any = []
    let servicosMasc : any = []
      masc.forEach(cliente => {
        cliente.getProdutosConsumidos.forEach((produto) =>{
            let idProd = produto.id
            produtosMasc.push(idProd)
        } 
        )
        cliente.getServicosConsumidos.forEach((servico) =>{
            let idServ = servico.id
            servicosMasc.push(idServ)
        } 
        )
      
    });

    let produtosOutro : any = []
    let servicosOutro : any = []
      outro.forEach(cliente => {
        cliente.getProdutosConsumidos.forEach((produto) =>{
            let idProd = produto.id
            produtosOutro.push(idProd)
        } 
        )
        cliente.getServicosConsumidos.forEach((servico) =>{
            let idServ = servico.id
            servicosOutro.push(idServ)
        } 
        )
      
    });

    // Feminino
    let produtoTotalfem : any = []
    let servicoTotalfem : any = []

    produtosFem.forEach(produto => {
        let total = produtosFem.filter(x => x==produto).length
        produtoTotalfem.push({
                    id : produto,
                    quantidade : total  
        })});
    servicosFem.forEach(servico => {
      let total = servicosFem.filter(x => x==servico).length
      servicoTotalfem.push({
                id : servico,
                quantidade : total
            })
         });

    servicoTotalfem = servicoTotalfem
                        .map(e => JSON.stringify(e))
                        .reduce((acc, cur) => (acc.includes(cur) || acc.push(cur), acc), [])
                        .map(e => JSON.parse(e));

    let ordemFemServ = servicoTotalfem.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
      return b.quantidade - a.quantidade;
    });

    produtoTotalfem = produtoTotalfem
    .map(e => JSON.stringify(e))
    .reduce((acc, cur) => (acc.includes(cur) || acc.push(cur), acc), [])
    .map(e => JSON.parse(e));

    let ordemFemProd = produtoTotalfem.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
    return b.quantidade - a.quantidade;
    });

    console.log(
      "\nOs 10 produtos/serviços mais consumidos por gênero"
    );

  console.log(`--------------------------------------\n`);

    console.log(
        "\n Gênero Feminino"
      );

    console.log(`--------------------------------------\n`);

      console.log(
        "\n Serviço"
      );
  
    ordemFemServ.forEach((prod) => {
      console.log("ID do Serviço: " + prod.id);
      console.log("Quantidade: " + prod.quantidade);
      console.log(`--------------------------------------\n`);

        });

        console.log(
          "\n Produto"
        );
    
      ordemFemProd.forEach((prod) => {
        console.log("ID do Produto: " + prod.id);
        console.log("Quantidade: " + prod.quantidade);
        console.log(`--------------------------------------\n`);
  
          });



    // Masculino
    let produtoTotalmasc : any = []
    let servicoTotalmasc : any = []

    produtosMasc.forEach(produto => {
        let total = produtosMasc.filter(x => x==produto).length
        produtoTotalmasc.push({
                    id : produto,
                    quantidade : total  
        })});
    servicosMasc.forEach(servico => {
      let total = servicosMasc.filter(x => x==servico).length
      servicoTotalmasc.push({
                id : servico,
                quantidade : total
            })
         });

    servicoTotalmasc = servicoTotalmasc
                        .map(e => JSON.stringify(e))
                        .reduce((acc, cur) => (acc.includes(cur) || acc.push(cur), acc), [])
                        .map(e => JSON.parse(e));

    let ordemMascServ = servicoTotalmasc.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
      return b.quantidade - a.quantidade;
    });

  produtoTotalmasc = produtoTotalmasc
    .map(e => JSON.stringify(e))
    .reduce((acc, cur) => (acc.includes(cur) || acc.push(cur), acc), [])
    .map(e => JSON.parse(e));

  let ordemMascProd = servicoTotalmasc.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
return b.quantidade - a.quantidade;
});

    console.log(
        "\n Gênero Masculino"
      );

      console.log(`--------------------------------------\n`);

      console.log(
        "\n Serviço"
      );
  
    ordemMascServ.forEach((prod) => {
      console.log("ID do Serviço: " + prod.id);
      console.log("Quantidade: " + prod.quantidade);
      console.log(`--------------------------------------\n`);
        });

        console.log(
          "\n Produto"
        );
    
      ordemMascProd.forEach((prod) => {
        console.log("ID do Produto: " + prod.id);
        console.log("Quantidade: " + prod.quantidade);
        console.log(`--------------------------------------\n`);
  
          });


          
    // Outro
    let produtoTotaloutro : any = []
    let servicoTotaloutro : any = []

    produtosOutro.forEach(produto => {
        let total = produtosOutro.filter(x => x==produto).length
        produtoTotaloutro.push({
                    id : produto,
                    quantidade : total  
        })});
    servicosOutro.forEach(servico => {
      let total = servicosOutro.filter(x => x==servico).length
      servicoTotaloutro.push({
                id : servico,
                quantidade : total
            })
         });

    servicoTotaloutro = servicoTotaloutro
                        .map(e => JSON.stringify(e))
                        .reduce((acc, cur) => (acc.includes(cur) || acc.push(cur), acc), [])
                        .map(e => JSON.parse(e));

    let ordemOutroServ = servicoTotaloutro.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
      return b.quantidade - a.quantidade;
    });

  produtoTotaloutro = produtoTotaloutro
    .map(e => JSON.stringify(e))
    .reduce((acc, cur) => (acc.includes(cur) || acc.push(cur), acc), [])
    .map(e => JSON.parse(e));

  let ordemOutroProd = servicoTotaloutro.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
return b.quantidade - a.quantidade;
});

    console.log(
        "\n Outro Gênero"
      );

      console.log(`--------------------------------------\n`);

      console.log(
        "\n Serviço"
      );
  
    ordemOutroServ.forEach((prod) => {
      console.log("ID do Serviço: " + prod.id);
      console.log("Quantidade: " + prod.quantidade);
      console.log(`--------------------------------------\n`);

        });

        console.log(
          "\n Produto"
        );
    
      ordemOutroProd.forEach((prod) => {
        console.log("ID do Produto: " + prod.id);
                console.log("Quantidade: " + prod.quantidade);
                console.log(`--------------------------------------\n`);
  
          });

  
}}
