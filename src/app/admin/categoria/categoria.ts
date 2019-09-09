/**
 * Define a classe referente a entidade de categoria.
 */
export class Categoria {
  id: number;
  nome: string;

  constructor(id: number = 0, nome: string = '') {
    this.id = id;
    this.nome = nome;
  }
}
