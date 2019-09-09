import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { ServiceAbstract } from '../../core/service-abstract.service';
import { Produto } from './produto';

@Injectable()
export class ProdutoService extends ServiceAbstract {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: Http) {
    super('produto');
  }

  /**
   * Recupera a lista de categorias cadastradas no sistema.
   *
   * @return array
   */
  public getProdutos(): Observable<any> {
    return this.http.get(this.getUrl()).map(this.extractData).catch(this.handleError);
  }

  /**
   * Recupera a categoria informada.
   *
   * @return object
   */
  public getProduto(id: any): Observable<any> {
    return this.http.get(this.getUrl() + '/' + id).map(this.extractData).catch(this.handleError);
  }

  /**
   * Recupera os produtos de acordo com a categoria informada.
   *
   * @param id
   */
  public getProdutosPorCategoria(id: number): Observable<any> {
    return this.http.get(this.getUrl() + '/categoria/' + id).map(this.extractData).catch(this.handleError);
  }

  /**
   * Recupera a lista de destaques.
   */
  public getDestaques(): Observable<any> {
    return this.http.get(this.getUrl() + '/destaque').map(this.extractData).catch(this.handleError);
  }

  /**
   * Salva um novo produto no sistema.
   *
   * @param produto
   */
  public salvarProduto(produto: Produto, id: number): Observable<any> {
    if (id === null) {
      return this.http.post(this.getUrl(), produto).map(this.extractData).catch(this.handleError);
    } else {
      return this.http.put(this.getUrl() + '/' + id, produto).map(this.extractData).catch(this.handleError);
    }
  }

  /**
   * Exclui a categoria com o id informado.
   *
   * @param id
   * @return object
   */
  public excluir(id: number): Observable<any> {
    return this.http.delete(this.getUrl() + '/' + id).map(this.extractData).catch(this.handleError);
  }
}
