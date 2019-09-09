import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { CarrinhoCompras } from './carrinho-compras';
import { Produto } from '../../admin/produto/produto';
import { ServiceAbstract } from '../../core/service-abstract.service';

@Injectable()
export class CarrinhoComprasService {
  private produtos: Produto[] = [];
  private carrinho = new Subject<CarrinhoCompras>();
  public carrinhoCompras = this.carrinho.asObservable();

  /**
   * Construtor da classe.
   */
  constructor() {
    const produtos = JSON.parse(localStorage.getItem('produtos'));

    if (produtos != null) {
      produtos.forEach(produto => {
        this.produtos.push(produto);
      });
    }
  }

  /**
   * Adiciona um novo produto na lista de produtos.
   *
   * @param produto
   */
  public adicionarProduto(produto: Produto): void {
    if (this.isProdutoNoCarrinho(produto)) {
      this.incrementarQuantidadeProdutoCarrinho(produto);
    } else {
      produto.quantidadeCarrinho = 1;
      this.produtos.push(produto);
    }

    this.carrinho.next(<CarrinhoCompras>{
      carregado: true,
      produtos: this.produtos,
      quantidadeProdutos: this.getQuantidadeProdutos()
    });

    localStorage.removeItem('produtos');
    localStorage.setItem('produtos', JSON.stringify(this.produtos));
  }

  /**
   * Remove um produto da lista de produtos.
   *
   * @param id
   */
  public removerProduto(produto: Produto): void {
    this.produtos = this.produtos.filter(prod => {
      return prod.id !== produto.id;
    });

    localStorage.removeItem('produtos');
    localStorage.setItem('produtos', JSON.stringify(this.produtos));
  }

  /*
   * Limpa o carrinho de compras.
   *
   * @param id
   */
  public limparCarrinho(): void {
    this.produtos = [];
    localStorage.removeItem('produtos');

    this.carrinho.next(<CarrinhoCompras>{
      carregado: true,
      produtos: this.produtos,
      quantidadeProdutos: this.getQuantidadeProdutos()
    });
  }

  /**
   * Verifica se o produto já está no carrinho de compras.
   *
   * @param produto
   */
  public isProdutoNoCarrinho(produto: Produto): boolean {
    return this.produtos.filter(prod => {
      return prod.id === produto.id;
    }).length > 0;
  }

  /**
   * Incrementa a quantidade de produtos no carrinho.
   *
   * @param produto
   */
  private incrementarQuantidadeProdutoCarrinho(produto): void {
    this.produtos.forEach(prod => {
      if (prod.id === produto.id) {
        prod.quantidadeCarrinho++;
      }
    });
  }

  /**
   * Recupera a quantidade total de produtos no carrinho de compras.
   *
   * @return quantidadeProdutos
   */
  public getQuantidadeProdutos(): number {
    let quantidadeProdutos = 0;

    if (this.produtos != null) {
      this.produtos.forEach(produto => {
        quantidadeProdutos += produto.quantidadeCarrinho;
      });
    }

    return quantidadeProdutos;
  }
}
