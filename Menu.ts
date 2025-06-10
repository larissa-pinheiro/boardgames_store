import chalk from 'chalk';
import leia from 'readline-sync';
import { JogoController } from './src/controller/JogoController';
import { BoardGame } from './src/model/BoardGame';

export function main() {
  let opcao, id, preco: number;
  let nome, categoria, idade, jogadores, duracao, mecanica, ano, editora: string;

  let jogos: JogoController = new JogoController();

  const jogo1 = new BoardGame(
    jogos.gerarID(),
    "Catan",
    "Estratégia",
    325.50,
    "10+",
    "3-4",
    "60-90min",
    "Negociação",
    "1995",
    "Devir"
  );
  jogos.cadastrar(jogo1);

  const jogo2 = new BoardGame(
    jogos.gerarID(),
    "Ticket to Ride",
    "Família",
    354.90,
    "8+",
    "2-5",
    "45min",
    "Coleção de cartas",
    "2004",
    "Galápagos"
  );
  jogos.cadastrar(jogo2);

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
        try {
          console.log("\nCadastrar Novo Jogo\n");

          console.log('Digite o nome do jogo: ')
          nome = leia.question('');
      
          console.log('Informe a categoria: ')
          categoria = leia.question('');
      
          console.log('Digite o preço do jogo: ')
          preco = leia.questionFloat('');
      
          console.log('Digite a idade para jogar: ')
          idade = leia.question('');
      
          console.log('Informe a quantidade de jogadores (Ex: 1-4):')
          jogadores = leia.question('');
      
          console.log('Informe a duração de jogo em minutos: ')
          duracao = leia.question('');
      
          console.log('Informe a mecânica (Ex: RPG, Solo): ')
          mecanica = leia.question('');
      
          console.log('Digite o ano de lançamento: ')
          ano = leia.question('');
      
          console.log('Digite o nome da editora: ')
          editora = leia.question('');
      
          id = jogos.gerarID();
          let jogo: BoardGame = new BoardGame(id, nome, categoria, preco, idade, jogadores, duracao, mecanica, ano, editora);
          jogos.cadastrar(jogo);
          console.log("\nJogo cadastrado com sucesso!\n");
        } catch (error) {
          console.log(chalk.red("\nErro ao cadastrar jogo: "), error);
        }

        break;
      case 2:
        console.log("\nListar Todos os Jogos\n");

        jogos.listarJogos();

        break;
      case 3:
        try {
          console.log("\nBuscar Jogo por ID\n");
          console.log("Digite o ID do jogo: ");
          id = leia.questionInt("");

          const jogoEncontrado = jogos.procurarPorID(id);
          if (jogoEncontrado) {
            jogoEncontrado.visualizar();
          } else {
            console.log("\nJogo não encontrado!\n");
          }
        } catch (error) {
          console.log(chalk.red("\nErro ao buscar jogo: "), error);
        }

        break;
      case 4:
        try {
          console.log("\nEditar Jogo\n");

          console.log("Digite o ID do jogo que deseja editar: ");
          id = leia.questionInt("");
        
          const jogoParaEditar = jogos.procurarPorID(id);
          if (jogoParaEditar) {
            console.log("\nDeixe em branco para manter o valor atual.\n");
          
            console.log(`Nome atual: ${jogoParaEditar.getNome()}`);
            nome = leia.question("Novo nome: ") || jogoParaEditar.getNome();
          
            console.log(`Categoria atual: ${jogoParaEditar.getCategoria()}`);
            categoria = leia.question("Nova categoria: ") || jogoParaEditar.getCategoria();
          
            console.log(`Preço atual: R$ ${jogoParaEditar.getPreco().toFixed(2)}`);
            preco = parseFloat(leia.question("Novo preco: ")) || jogoParaEditar.getPreco();
          
            console.log(`Idade recomendada atual: ${jogoParaEditar.getIdade()}`);
            idade = leia.question("Nova idade recomendada: ") || jogoParaEditar.getIdade();
          
            console.log(`Jogadores atual: ${jogoParaEditar.getJogadores()}`);
            jogadores = leia.question("Novos jogadores: ") || jogoParaEditar.getJogadores();
          
            console.log(`Duração atual: ${jogoParaEditar.getDuracao()}`);
            duracao = leia.question("Nova duracao: ") || jogoParaEditar.getDuracao();
          
            console.log(`Mecânica atual: ${jogoParaEditar.getMecanica()}`);
            mecanica = leia.question("Nova mecanica: ") || jogoParaEditar.getMecanica();
          
            console.log(`Ano atual: ${jogoParaEditar.getAno()}`);
            ano = leia.question("Novo ano: ") || jogoParaEditar.getAno();

            console.log(`Editora atual: ${jogoParaEditar.getEditora()}`);
            editora = leia.question("Nova editora: ") || jogoParaEditar.getEditora();
          
            const jogoEditado = new BoardGame(
              id,
              nome,
              categoria,
              preco,
              idade,
              jogadores,
              duracao,
              mecanica,
              ano,
              editora
            );
          
            jogos.editar(jogoEditado);
          } else {
            console.log("\nJogo não encontrado!\n");
          }
        } catch (err) {
          console.log(chalk.red("\nErro ao editar jogo: "), err);
        }

        break;
      case 5:
        try {
          console.log("\nRemover Jogo\n");

          console.log("Digite o ID do jogo que deseja remover: ");
          id = leia.questionInt("");

          jogos.remover(id);
          console.log("\nJogo removido com sucesso!\n");
        } catch (error) {
          console.log(chalk.red("\nErro ao remover jogo: "), error);
        }

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