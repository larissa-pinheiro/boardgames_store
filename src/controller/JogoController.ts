import { BoardGame } from "../model/BoardGame";
import { JogoRepository } from "../repository/JogoRepository";

export class JogoController implements JogoRepository {
  private listaJogos: Array<BoardGame> = new Array<BoardGame>();
  id: number = 0

  procurarPorID(id: number): BoardGame | undefined {
    return this.listaJogos.find(jogo => jogo.getId() === id);
  }

  listarJogos(): void {
    if (this.listaJogos.length === 0) {
      console.log("\nNão há jogos cadastrados!\n");
      return;
   }

    for (let jogo of this.listaJogos) {
        jogo.visualizar();
    }
  }

  cadastrar(jogo: BoardGame): void {
    this.listaJogos.push(jogo);
    console.log(`O Jogo ${jogo.getNome()} foi cadastrado com sucesso!`);
}

  editar(jogo: BoardGame): void {
    const index = this.listaJogos.findIndex(j => j.getId() === jogo.getId());
    if (index !== -1) {
        this.listaJogos[index] = jogo;
        console.log(`\nJogo ${jogo.getNome()} atualizado com sucesso!\n`);
    } else {
        console.log("\nJogo não encontrado!\n");
    }
  }

  remover(id: number): void {
    const index = this.listaJogos.findIndex(jogo => jogo.getId() === id);
    if (index !== -1) {
        const nomeJogo = this.listaJogos[index].getNome();
        this.listaJogos.splice(index, 1);
        console.log(`\nJogo ${nomeJogo} removido com sucesso!\n`);
    } else {
        console.log("\nJogo não encontrado!\n");
    }
  }

  public gerarID(): number {
    return ++this.id;
  }
}