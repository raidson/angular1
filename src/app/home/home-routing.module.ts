import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DestaqueRotas } from './destaque/destaque-routing.module';
import { ProdutosCarrinhoRotas } from './produtos-carrinho/produtos-carrinho-routing.module';
import { CategoriaProdutosRotas } from './categoria-produtos/categoria-produtos-routing.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      ...DestaqueRotas,
      ...ProdutosCarrinhoRotas,
      ...CategoriaProdutosRotas
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
