import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { CarrinhoCompras } from './carrinho-compras';
import { Produto } from '../../admin/produto/produto';
import { CarrinhoComprasService } from './carrinho-compras.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.scss']
})
export class CarrinhoComprasComponent implements OnInit, OnDestroy {
  public quantidadeProdutos = 0;
  public produtos: Produto[] = [];
  public carregado: Boolean = true;

  private subscription: Subscription;

  /**
   * Construtor da classe.
   *
   * @param carrinhoComprasService
   */
  constructor(
    private carrinhoService: CarrinhoComprasService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const produtos = JSON.parse(localStorage.getItem('produtos'));

    if (produtos != null) {
      produtos.forEach(produto => {
        this.produtos.push(produto);
        this.quantidadeProdutos = this.carrinhoService.getQuantidadeProdutos();
      });
    }
  }

  /**
   * Quando carregar o componente.
   */
  ngOnInit() {
    this.subscription = this.carrinhoService.carrinhoCompras.subscribe((carrinho: CarrinhoCompras) => {
      this.produtos = carrinho.produtos;
      this.quantidadeProdutos = carrinho.quantidadeProdutos;
    });
  }

  /**
   * Quando o componente for destruído.
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Adiciona um novo produto no carrinho de compra.
   *
   * @param produto
   */
  public adicionarProduto(produto: Produto): void {
    this.carrinhoService.adicionarProduto(produto);
  }

  /**
   * Remove um produto do carrinho de compra;
   *
   * @param id
   */
  public removerProduto(produto: Produto): void {
    this.carrinhoService.removerProduto(produto);
  }

  /**
   * Redireciona o usuário para tela de listagem de produtos.
   */
  public listarProdutosCarrinho(): void {
    this.router.navigate(['/produtos-carrinho']);
  }
}
