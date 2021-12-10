import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";

import CadastroCliente from "../negocio/Cliente/cadastroCliente";
import ListagemClientes from "../negocio/Cliente/listagemClientes";
import AtualizarCliente from "../negocio/Cliente/updateCliente";
import DeletarCliente from "../negocio/Cliente/deleteCliente";
import AtualizarConsumo from "../negocio/Cliente/cadastroConsumo";

import CadastroServico from "../negocio/Servico/cadastroServico";
import ListagemServicos from "../negocio/Servico/listagemServicos";
import AtualizarServico from "../negocio/Servico/updateServico";
import DeletarServico from "../negocio/Servico/deleteServico";

import CadastroProduto from "../negocio/Produto/cadastroProduto";
import ListagemProdutos from "../negocio/Produto/listagemProdutos";
import AtualizarProduto from "../negocio/Produto/updateProduto";
import DeletarProduto from "../negocio/Produto/deleteProduto";

import ListagemGenero from "../negocio/Listagem/listagemGenero";
import ListagemQuantidade from "../negocio/Listagem/listagemConsumoQuantidade";
import ListagemMenorQuantidade from "../negocio/Listagem/listagemMenorQuantidade";
import ListagemConsumoGenero from "../negocio/Listagem/listagemGeneroConsumo";
import ListagemConsumo from "../negocio/Listagem/listagemConsumo";
import ListagemValor from "../negocio/Listagem/listagemConsumoValor";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Atualizar Cliente`);
    console.log(`4 - Deletar Cliente`);
    console.log(`5 - Inserir Consumo`);
    console.log(`6 - Cadastrar Serviço`);
    console.log(`7 - Listar todos os serviços`);
    console.log(`8 - Atualizar Serviço`);
    console.log(`9 - Deletar Serviço`);
    console.log(`10 - Cadastrar Produto`);
    console.log(`11 - Listar todos os produtos`);
    console.log(`12 - Atualizar Produto`);
    console.log(`13 - Deletar Produto`);
    console.log(`14 - Listagem de Clientes por Gênero`);
    console.log(`15 - Listagem dos 10 Clientes que mais consumiram (em quantidade)`);
    console.log(`16 - Listagem dos 05 Clientes que menos consumiram (em quantidade)`);
    console.log(`17 - Listagem dos 05 Clientes que mais consumiram (em valor)`);
    console.log(`18 - Listagem dos produtos/serviços mais consumidos por Gênero`);
    console.log(`19 - Listagem dos produtos/serviços mais consumidos`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let atualizarClientes = new AtualizarCliente(empresa.getClientes)
            atualizarClientes.atualizar()
            break;
        case 4:
            let DeletarClientes = new DeletarCliente(empresa.getClientes)
            DeletarClientes.deletar()
            break;
        case 5:
                let inserirConsumo = new AtualizarConsumo(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
                inserirConsumo.atualizar()
                break;
        case 6:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 7:
                let listagemServicos = new ListagemServicos(empresa.getServicos)
                listagemServicos.listar()
                break;
        case 8:
            let atualizarServicos = new AtualizarServico(empresa.getServicos)
            atualizarServicos.atualizar()
            break;
        case 9:
            let deletarServicos = new DeletarServico(empresa.getServicos)
            deletarServicos.deletar()
            break;
        case 10:
                let cadastroProduto = new CadastroProduto(empresa.getProdutos)
                cadastroProduto.cadastrar()
                break;
        case 11:
                let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
                listagemProdutos.listar()
                break;
        case 12:
                let atualizarProdutos = new AtualizarProduto(empresa.getProdutos)
                atualizarProdutos.atualizar()
                break;
        case 13:
                let deletarProdutos = new DeletarProduto(empresa.getProdutos)
                deletarProdutos.deletar()
                break;
        case 14:
                let listarGenero = new ListagemGenero(empresa.getClientes)
                listarGenero.listar()
                break;
        case 15:
                let listarQuantidade = new ListagemQuantidade(empresa.getClientes)
                listarQuantidade.listar()
                break;
        case 16:
                let listarMenorQuantidade = new ListagemMenorQuantidade(empresa.getClientes)
                listarMenorQuantidade.listar()
                break;
        case 17:
                let listarConsumoValor = new ListagemValor(empresa.getClientes)
                listarConsumoValor.listar()
                break;
        case 18:
                let listarConsumoGenero = new ListagemConsumoGenero(empresa.getClientes)
                listarConsumoGenero.listar()
                break;
        case 19:
                let listarConsumo = new ListagemConsumo(empresa.getClientes)
                listarConsumo.listar()
                break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}