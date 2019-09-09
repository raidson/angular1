import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationStart } from '@angular/router';

import { Produto } from '../../admin/produto/produto';
import { ProdutoService } from '../../admin/produto/produto.service';
import { CategoriaProdutosResolve } from './resolve/categoria-produtos.resolve';

@Component({
  selector: 'app-categoria-produtos',
  templateUrl: './categoria-produtos.component.html',
  styleUrls: ['./categoria-produtos.component.scss']
})
export class CategoriaProdutosComponent {

  public produtos: Produto[];

  /**
   * Construtor da classe.
   *
   * @param produtoService
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) {
    this.route.params.subscribe(params => {
      this.produtos = this.route.snapshot.data['categoriaProdutos'].content;
    });
  }
}
