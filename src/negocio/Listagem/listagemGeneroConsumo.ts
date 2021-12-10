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
    
    let consumoQuantidade : any =  [];

    this.clientes.forEach((cliente) => {
      
      let cpf = cliente.getCpf.getValor;

      let nome = cliente.nome

      let genero = cliente.genero

      let consumoTotal =
        cliente.getProdutosConsumidos.length +
        cliente.getServicosConsumidos.length;

      consumoQuantidade.push({
        cpf : cpf,
        nome : nome,
        genero : genero,
        quantidade : consumoTotal
      })
    
    });

    let fem: any = [];
    let masc: any = [];
    let outro: any = [];

    consumoQuantidade.forEach((cliente: { genero: string; }) => {
        if (parseInt(cliente.genero) == 1) {
          fem.push(cliente);
        } else if (parseInt(cliente.genero) == 2) {
          masc.push(cliente);
        } else if (parseInt(cliente.genero) == 3) {
          outro.push(cliente);
        }
      });

    let ordemFem = fem.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
      return b.quantidade - a.quantidade;
    });

    let ordemMasc = masc.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
        return b.quantidade - a.quantidade;
      });

    let ordemOutro = outro.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
        return b.quantidade - a.quantidade;
      });

    

    console.log(
      "\nOs 10 clientes que mais consumiram produtos/serviços por gênero"
    );

    console.log(
        "\n Gênero Feminino"
      );
  
    ordemFem.forEach((feminino) => {
        console.log("CPF: " + feminino.cpf);
        console.log("Nome do cliente: " + feminino.nome);
        console.log("Quantidade Consumida: " + feminino.quantidade);
        console.log(`--------------------------------------\n`);

        });


    console.log(
            "Gênero Masculino"
          );
      
    ordemMasc.forEach((masculino) => {
        console.log("CPF: " + masculino.cpf);
        console.log("Nome do cliente: " + masculino.nome);
        console.log("Quantidade Consumida: " + masculino.quantidade);
        console.log(`--------------------------------------\n`);
    
            });

    console.log(
                "Outro Gênero"
              );
          
    ordemOutro.forEach((outro) => {
        console.log("CPF: " + outro.cpf);
        console.log("Nome do cliente: " + outro.nome);
        console.log("Quantidade Consumida: " + outro.quantidade);
        console.log(`--------------------------------------\n`);
        
                });
  };

}
