import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";


export default class ListagemGenero extends Listagem { 
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        
   
    let fem: Cliente[] = [];
    let masc: Cliente[] = [];
    let outro: Cliente[] = [];

    this.clientes.forEach((cliente) => {
      if (parseInt(cliente.genero) == 1) {
        fem.push(cliente);
      } else if (parseInt(cliente.genero) == 2) {
        masc.push(cliente);
      } else if (parseInt(cliente.genero) == 3) {
        outro.push(cliente);
      }
    });

    console.log("\nListagem de clientes por gênero\n");

    console.log('\n Clientes do Gênero Feminino: \n')
       
    fem.forEach(feminino => {
        console.log(`Nome: ` + feminino.nome);
        console.log(`Nome social: ` + feminino.nomeSocial);
        console.log(`CPF: ` + feminino.getCpf.getValor);
        console.log(`--------------------------------------\n`);
     

        });

    console.log(`--------------------------------------`);   

    console.log('\n Clientes do Gênero Masculino: \n')
    masc.forEach(masculino => {
            console.log(`Nome: ` + masculino.nome);
            console.log(`Nome social: ` + masculino.nomeSocial);
            console.log(`CPF: ` + masculino.getCpf.getValor);
            console.log(`--------------------------------------\n`);

    
            });



    console.log('\n Outros Gêneros: \n')
    outro.forEach(outro => {
                console.log(`Nome: ` + outro.nome);
                console.log(`Nome social: ` + outro.nomeSocial);
                console.log(`CPF: ` + outro.getCpf.getValor);
                console.log(`--------------------------------------`);
        
                });
    }

}