import chalk from 'chalk';
import leia from 'readline-sync';

export function main() {
  let opcao: number;

  while (true) {
    console.log(chalk.bgBlack(chalk.rgb(238, 230, 255)([ 
      ' _______________________________________________________ ', 
      '|                                                       |',
      '|               LÚDIKA - BOARDGAMES STORE               |',
      '|_______________________________________________________|',
      '|                                                       |',
      '|               1 - Cadastrar Jogo                      |',
      '|               2 - Listar Todos os Jogos               |',
      '|               3 - Buscar Jogo por ID                  |',
      '|               4 - Editar Jogo                         |',
      '|               5 - Remover Jogo                        |',
      '|               0 - Sair                                |',
      '|_______________________________________________________|',
    ].join('\n'))));
  
    console.log("Entre com a opção desejada: ");
    opcao = leia.questionInt("")
  
    if (opcao === 0) {
      console.log("\nLÚDIKA - Sua aventura em boardgames começa aqui!");
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\n\nCadastrar Novo Jogo\n\n");
        break;
      case 2:
        console.log("\n\nListar Todos os Jogos\n\n");
        break;
      case 3:
        console.log("\n\nBuscar Jogo por ID\n\n");
        break;
      case 4:
        console.log("\n\nEditar Jogo\n\n");
        break;
      case 5:
        console.log("\n\nRemover Jogo\n\n");
        break;
      default:
        console.log("\nOpção Inválida!\n");
        break;
    }
  }
}

export function sobre(): void {
  console.log(chalk.bgBlack(chalk.rgb(179, 224, 255)([
  '\n _______________________________________________________ ',
    '|                                                       |',
    '| Projeto Desenvolvido por:                             |',
    '| Larissa Pinheiro - linkedin.com/in/larissa-mpinheiro/ |',
    '| github.com/larissa-pinheiro                           |',
    '|_______________________________________________________|',
  ].join('\n')))); 
}

main();
