import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcessoComponent } from './acesso.component';
import { LoginRotas } from './login/login-routing.module';

/**
 * Define as rotas para a parte de aceso ao sistema.
 */
const routes: Routes = [
  {
    path: 'acesso',
    component: AcessoComponent,
    children: [
      {
        path: '', redirectTo: 'login', pathMatch: 'full'
      },
      ...LoginRotas
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcessoRoutingModule { }
