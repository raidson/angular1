import { Routes } from '@angular/router';

import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { FormularioProdutoComponent } from './formulario-produto/formulario-produto.component';
import { VisualizarProdutoComponent } from './visualizar-produto/visualizar-produto.component';

/**
 * Define as rotas de categoria.
 */
export const ProdutoRotas: Routes = [
  {
    path: 'produto',
    component: ListaProdutosComponent
  },
  {
    path: 'produto/inserir',
    component: FormularioProdutoComponent
  },
  {
    path: 'produto/atualizar/:id',
    component: FormularioProdutoComponent
  },
  {
    path: 'produto/visualizar/:id',
    component: VisualizarProdutoComponent
  }
];
