import { Component, OnInit } from '@angular/core';

import { Produto } from '../../admin/produto/produto';
import { ProdutoService } from '../../admin/produto/produto.service';
import { CarrinhoComprasService } from '../carrinho-compras/carrinho-compras.service';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.scss']
})
export class DestaqueComponent implements OnInit {
  public produtos: Produto[];

  /**
   * Construtor da classe.
   *
   * @param produtoService
   */
  constructor(
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoComprasService
  ) {}

  /**
   * Quando o componente estiver carregando.
   */
  ngOnInit() {
    this.produtoService.getDestaques().subscribe(
      response => {
        this.produtos = response.content;
      },
      error => {
        console.log(error);
      }
    );
  }

  /**
   * Adiciona um produto ao carrinho de compra.
   *
   * @param produto
   */
  public adicionarProduto(produto: Produto): void {
    if (produto) {
      this.carrinhoService.adicionarProduto(produto);
    }
  }
}
