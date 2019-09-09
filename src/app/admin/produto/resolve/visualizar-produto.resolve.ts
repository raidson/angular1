import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Produto } from '../../../admin/produto/produto';
import { ProdutoService } from '../../../admin/produto/produto.service';
import { Observable } from 'rxjs/Observable';

/**
 * Resolve responsável por retornar a lista de ingredientes do servidor.
 */
@Injectable()
export class CategoriaProdutosResolve implements Resolve<any> {

  private produtos: Produto[];

  /**
   * Construtor da classe.
   *
   * @param produtoService
   */
  constructor(private produtoService: ProdutoService) { }

  /**
     * Metodo responsável por retornar a lista de ingredientes.
     *
     * @param route
     * @returns {Observable<any>}
     */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const idCategoria = Number.parseInt(route.params['id']);
    return this.produtoService.getProdutosPorCategoria(idCategoria);
  }
}
