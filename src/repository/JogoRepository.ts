import { BoardGame } from "../model/BoardGame";

export interface JogoRepository {
  procurarPorID(id: number): void;
  listarJogos(): void;
  cadastrar(jogo: BoardGame): void;
  editar(jogo: BoardGame): void;
  remover(id: number): void;
}