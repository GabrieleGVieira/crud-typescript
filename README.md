[![Generic badge](https://img.shields.io/badge/STATUS%20DO%20PROJETO-CONCLU%C3%8DDO-green)](https://shields.io/)


<h1 text align="center">  World Beauty </h1>

> Curso: Desenvolvimento de Software Multiplataforma
> 
> Orientador: Profº Dr.Eng. Gerson Penha 👨‍🏫
> 
> Disciplina: Técnica de Programação I
>  
> Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal 


## - Objetivo do projeto - 

Desenvolver um sistema do tipo CLI (command-line interface) com o objetivo suprir as necessidades do grupo  World Beauty (fictício), da área de estética.

## - Diagrama de Classes -  
Para o desenvolvimento do projeto, foi utilizado o diagrama de classes abaixo, que contém as estruturas e relacionamentosentre as classes:

![diagrama-classe](https://github.com/GabrieleGVieira/crud-typescript/blob/master/imagens/diagrama-classes.png)


## - Índice -
<a name="ancora"></a>
  
 [Ferramentas utilizadas](#ancora2)
 
 [Requisitos](#ancora1)
 
 [Entregas](#ancora3)
 
 [Pastas](#ancora4)
 
 [Como executar](#ancora5) 

<br />


<a id="ancora2"></a>
## - Ferramentas e Tecnologias utilizadas - :hammer:

- Typescript

- VSCode

- Node.js

<br />

<a id="ancora1"></a>
## - Requisitos - :computer_mouse:  

- CRUD (Create, Read, Update e Delete) de Clientes
- CRUD (Create, Read, Update e Delete) de Produtos e Serviços
- Registro de consumo dos produtos ou serviços que cada cliente adquiriu.
- Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.
- Listagem de todos os clientes por gênero.
- Listagem geral dos serviços ou produtos mais consumidos.
- Listagem dos serviços ou produtos mais consumidos por gênero.
- Listagem dos 5 clientes que menos consumiram produtos ou serviços.
- Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.

<a id="ancora3"></a>
## - ENTREGAS - :computer_mouse: 

- [x] CRUD de Clientes

Exemplo: Cadastro

![cadastro-cliente](https://github.com/GabrieleGVieira/crud-typescript/blob/master/imagens/cliente-cadastro.png)


- [x] CRUD de Produtos e Serviços

Exemplo: Atualização de Produto

![update-produto](https://github.com/GabrieleGVieira/crud-typescript/blob/master/imagens/produto-update.png)

- [x] Registro de consumo dos produtos ou serviços que cada cliente adquiriu.

![inserir-consumo](https://github.com/GabrieleGVieira/crud-typescript/blob/master/imagens/inserir-consumo.png)

- [x] Listagem de todos os clientes por gênero.

![listagem-genero](https://github.com/GabrieleGVieira/crud-typescript/blob/master/imagens/listagem-genero.png)

- [x] Listagem dos serviços ou produtos mais consumidos por gênero.

- [x] Listagem geral dos serviços ou produtos mais consumidos.

![maior-consumo](https://github.com/GabrieleGVieira/crud-typescript/blob/master/imagens/listagem-consumo.png)

- [x] Listagem dos 5 clientes que menos consumiram produtos ou serviços.

![menor-quantidade](https://github.com/GabrieleGVieira/crud-typescript/blob/master/imagens/listagem-menor-quantidade.png)

- [x] Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.

![maior-quantidade](https://github.com/GabrieleGVieira/crud-typescript/blob/master/imagens/listagem-maior-quantidade.png)

- [x] Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.

![maior-valor](https://github.com/GabrieleGVieira/crud-typescript/blob/master/imagens/listagem-maior-valor.png)


<a id="ancora4"></a>
## - PASTAS 📁


O código está dividído da seguinte maneira dentro da pasta <a href="https://github.com/GabrieleGVieira/crud-typescript/tree/master/src">/src</a>:

📁 <a href="https://github.com/GabrieleGVieira/crud-typescript/tree/master/src/modelo">/modelo:</a> Pasta onde fica localizada as classes <br />
📁 <a href="https://github.com/GabrieleGVieira/crud-typescript/tree/master/src/io">/io:</a> Pasta onde fica localizado o código para entrada e saída de valores no prompt <br />
📁 <a href="https://github.com/GabrieleGVieira/crud-typescript/tree/master/src/negocio">/negocio:</a> Pasta onde fica localizada as classes das funcionalidades <br />
📁 <a href="https://github.com/GabrieleGVieira/crud-typescript/tree/master/src/app"> /app:</a> Pasta principal da main <br />

<a id="ancora5"></a>
## - EXECUÇÃO

Para executar o projeto você precisa ter os seguintes requisitos instalados:

- Node.js
- TypeScript

Caso for clonar o repositório:

- Git

Ao atender os requisitos e já tiver clonado/baixado o projeto, basta executar as seguintes linhas de comando no git ou prompt de comando:

          # Para instalar bibliotecas e dependências:
          npm install

          # Para compilar o TypeScript:
          tsc

          # Rodar o projeto:
          npm run app


