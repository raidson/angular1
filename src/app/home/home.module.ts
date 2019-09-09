import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { DestaqueComponent } from './destaque/destaque.component';
import { CarrinhoComprasModule } from './carrinho-compras/carrinho-compras.module';
import { CategoriaProdutosComponent } from './categoria-produtos/categoria-produtos.component';

import { ProdutosCarrinhoModule } from './produtos-carrinho/produtos-carrinho.module';
import { CategoriaProdutosResolve } from './categoria-produtos/resolve/categoria-produtos.resolve';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    CarrinhoComprasModule,
    ProdutosCarrinhoModule
  ],
  declarations: [HomeComponent, DestaqueComponent, CategoriaProdutosComponent],
  providers: [
    CategoriaProdutosResolve
  ]
})
export class HomeModule { }
