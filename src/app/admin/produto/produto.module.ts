import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService, ToastrConfig } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { FormularioProdutoComponent } from './formulario-produto/formulario-produto.component';
import { VisualizarProdutoComponent } from './visualizar-produto/visualizar-produto.component';

import { ProdutoService } from './produto.service';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  declarations: [
    ListaProdutosComponent,
    FormularioProdutoComponent,
    VisualizarProdutoComponent
  ],
  providers: [
    ProdutoService,
    ToastrService
  ]
})
export class ProdutoModule { }
