import { Routes } from '@angular/router';

import { CategoriaProdutosComponent } from './categoria-produtos.component';
import { CategoriaProdutosResolve } from './resolve/categoria-produtos.resolve';

/**
 * Define as rotas de categoria.
 */
export const CategoriaProdutosRotas: Routes = [
  {
    path: 'categoria/:id',
    component: CategoriaProdutosComponent,
    resolve: {
      categoriaProdutos: CategoriaProdutosResolve
    }
  }
];
