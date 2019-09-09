import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Produto } from '../../admin/produto/produto';
import { CarrinhoComprasService } from '../carrinho-compras/carrinho-compras.service';

@Component({
  selector: 'app-produtos-carrinho',
  templateUrl: './produtos-carrinho.component.html',
  styleUrls: ['./produtos-carrinho.component.scss']
})
export class ProdutosCarrinhoComponent implements OnInit {
  public produtos: Produto[] = [];

  /**
   * Construtor da clase.
   *
   * @param route
   */
  constructor(
    private route: ActivatedRoute,
    private carrinhoComprasService: CarrinhoComprasService
  ) {
    const produtos = JSON.parse(localStorage.getItem('produtos'));

    if (produtos != null) {
      produtos.forEach(produto => {
        this.produtos.push(produto);
      });
    }
  }

  ngOnInit() {}

  /**
   * Fecha o carrinho de compras.
   */
  public fecharCarrinho(): void {
    this.produtos = [];
    this.carrinhoComprasService.limparCarrinho();
  }

  /**
   * Calcula o total do valor dos produtos do carrinho.
   */
  public calcularTotalPrecoProdutos(): number {
    let precoTotalProdutos = 0;

    if (this.produtos != null) {
      this.produtos.forEach(produto => {
        precoTotalProdutos += (produto.preco * produto.quantidadeCarrinho);
      });
    }

    return precoTotalProdutos;
  }

  /**
   * Adiciona o produto selecionado no carrinho.
   *
   * @param produto
   */
  public adicionarProduto(produto): void {
    this.carrinhoComprasService.adicionarProduto(produto);
  }

  /**
   * Remove o produto selecionado no carrinho.
   *
   * @param produto
   */
  public removerProduto(produto): void {
    this.carrinhoComprasService.removerProduto(produto);
  }
}
