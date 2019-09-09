import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { ServiceAbstract } from '../../core/service-abstract.service';

@Injectable()
export class DashboardService extends ServiceAbstract {
  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: Http) {
    super('dashboard');
  }

  /**
   * Recupera os dados do dashboard do sistema.
   *
   * @return array
   */
  public getDashboard(): Observable<any> {
    return this.http
      .get(this.getUrl())
      .map(this.extractData)
      .catch(this.handleError);
  }
}
