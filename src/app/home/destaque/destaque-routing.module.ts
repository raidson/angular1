import { Routes } from '@angular/router';

import { DestaqueComponent } from './destaque.component';

/**
 * Define as rotas de categoria.
 */
export const DestaqueRotas: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/destaques'
  },
  {
    path: 'destaques',
    component: DestaqueComponent
  }
];
