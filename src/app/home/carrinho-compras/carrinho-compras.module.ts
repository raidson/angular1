import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrinhoComprasService } from './carrinho-compras.service';
import { CarrinhoComprasComponent } from './carrinho-compras.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarrinhoComprasComponent],
  providers: [CarrinhoComprasService],
  exports: [CarrinhoComprasComponent]
})
export class CarrinhoComprasModule { }
