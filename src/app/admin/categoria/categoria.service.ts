import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { ServiceAbstract } from '../../core/service-abstract.service';
import { Categoria } from './categoria';

@Injectable()
export class CategoriaService extends ServiceAbstract {
  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: Http) {
    super('categoria');
  }

  /**
   * Recupera a lista de categorias cadastradas no sistema.
   *
   * @return array
   */
  public getCategorias(): Observable<any> {
    return this.http
      .get(this.getUrl())
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * Recupera a categoria informada.
   *
   * @return object
   */
  public getCategoria(id: any): Observable<any> {
    return this.http
      .get(this.getUrl() + '/' + id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * Responsável por salvar uma nova categoria no sistema.
   *
   * @param categoria
   * @return Observable<any>
   */
  public salvarCategoria(categoria: Categoria, id: number): Observable<any> {
    if (id === undefined) {
      return this.http
        .post(this.getUrl(), categoria)
        .map(this.extractData)
        .catch(this.handleError);
    } else {
      return this.http
        .put(this.getUrl() + '/' + id, categoria)
        .map(this.extractData)
        .catch(this.handleError);
    }
  }

  /**
   * Exclui a categoria com o id informado.
   *
   * @param id
   * @return object
   */
  public excluir(id: number): Observable<any> {
    return this.http
      .delete(this.getUrl() + '/' + id)
      .map(this.extractData)
      .catch(this.handleError);
  }
}
