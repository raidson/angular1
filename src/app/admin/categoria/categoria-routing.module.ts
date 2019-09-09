import { Routes } from '@angular/router';

import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { FormularioCategoriaComponent } from './formulario-categoria/formulario-categoria.component';
import { VisualizarCategoriaComponent } from './visualizar-categoria/visualizar-categoria.component';

/**
 * Define as rotas de categoria.
 */
export const CategoriaRotas: Routes = [
  {
    path: 'categoria',
    component: ListaCategoriasComponent
  },
  {
    path: 'categoria/inserir',
    component: FormularioCategoriaComponent
  },
  {
    path: 'categoria/atualizar/:id',
    component: FormularioCategoriaComponent
  },
  {
    path: 'categoria/visualizar/:id',
    component: VisualizarCategoriaComponent
  }
];
