import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoRotas } from './produto/produto-routing.module';
import { CategoriaRotas } from './categoria/categoria-routing.module';
import { DashboardRotas } from './dashboard/dashboard-routing.module';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      ...DashboardRotas,
      ...CategoriaRotas,
      ...ProdutoRotas
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
