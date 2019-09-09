import { Categoria } from '../categoria/categoria';

export class Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  isDestaque: boolean;
  categoria: Categoria;
  quantidadeCarrinho: number;

  public Produto(
    id: number = 0,
    nome: string = '',
    preco: number = 0.0,
    descricao: string = '',
    isDestaque: boolean = true,
    categoria: Categoria = null,
    quantidadeCarrinho: number = 0
  ) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
    this.categoria = categoria;
    this.isDestaque = isDestaque;
    this.quantidadeCarrinho = quantidadeCarrinho;
  }
}
