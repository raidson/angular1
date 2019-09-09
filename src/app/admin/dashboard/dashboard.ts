export class Dashboard {
  public nuProdutos: number;
  public nuCategorias: number;

  public Dashboard(
    nuProdutos: number = 0,
    nuCategorias: number = 0
  ) {
    this.nuProdutos = nuProdutos;
    this.nuCategorias = nuCategorias;
  }
}
