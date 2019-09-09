import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

/**
 * Define as rotas de categoria.
 */
export const DashboardRotas: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];
