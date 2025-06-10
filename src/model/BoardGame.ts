import { Jogo } from "./Jogo";

export class BoardGame extends Jogo {
  private _mecanica: string;
  private _ano: string;
  private _editora: string;


  constructor(id: number, nome: string, categoria: string, preco: number, idade: string, jogadores: string, duracao: string, mecanica: string, ano: string, editora: string) {
    super(id, nome, categoria, preco, idade, jogadores, duracao);
    this._mecanica = mecanica;
    this._ano = ano;
    this._editora = editora;
  }

  public getMecanica() {
    return this._mecanica;
  }

  public setMecanica(mecanica: string) {
    this._mecanica = mecanica;
  }

  public getAno() {
    return this._ano;
  }

  public setAno(ano: string) {
    this._ano = ano;
  }

  public getEditora() {
    return this._editora;
  }

  public setEditora(editora: string) {
    this._editora = editora;
  }

  public visualizar(): void {
    console.log(`
_______________________________________________________

  Jogo: ${this.getNome()}
  Editora: ${this.getEditora()}
  Categoria: ${this.getCategoria()}
  Mecânica: ${this.getMecanica()}
  Ano: ${this.getAno()}
  Idade Recomendada: ${this.getIdade()}
  Jogadores: ${this.getJogadores()}
  Duração: ${this.getDuracao()}
  Preço: R$ ${this.getPreco().toFixed(2)}
_______________________________________________________ 
  `);
  }
}