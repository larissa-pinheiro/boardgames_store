export abstract class Jogo {
  private _id: number;
  private _nome: string;
  private _categoria: string;
  private _preco: number;
  private _idade: string;
  private _jogadores: string;
  private _duracao: string;

  constructor(id: number, nome: string, categoria: string, preco: number, idade: string, jogadores: string, duracao: string) {
    this._id = id;
    this._nome = nome;
    this._categoria = categoria;
    this._preco = preco;
    this._idade = idade;
    this._jogadores = jogadores;
    this._duracao = duracao;
  }

  public getId(): number {
    return this._id;
  }

  public setId(id: number): void {
    this._id = id;
  }

  public getNome(): string {
    return this._nome;
  }

  public setNome(nome: string): void {
    this._nome = nome;
  }

  public getCategoria(): string {
    return this._categoria;
  }

  public setCategoria(categoria: string): void {
    this._categoria = categoria;
  }

  public getPreco(): number {
    return this._preco;
  }

  public setPreco(preco: number): void {
    this._preco = preco;
  }

  public getIdade(): string {
    return this._idade;
  }

  public setIdade(idade: string): void {
    this._idade = idade;
  }

  public getJogadores(): string {
    return this._jogadores;
  }

  public setJogadores(jogadores: string): void {
    this._jogadores = jogadores;
  }

  public getDuracao(): string {
    return this._duracao;
  }

  public setDuracao(duracao: string): void {
    this._duracao = duracao;
  }

  public abstract visualizar(): void;
}