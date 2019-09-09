import { Component, OnInit } from '@angular/core';

import { Categoria } from '../admin/categoria/categoria';
import { CategoriaService } from '../admin/categoria/categoria.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public categorias: Categoria[];

  /**
   * Construtor da classe.
   *
   * @param categoriaService
   */
  constructor(private categoriaService: CategoriaService) { }

  /**
   * Método inicializado junto ao component.
   */
  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(
      response => {
        this.categorias = response.content;
      },
      error => {
        console.log(error);
      }
    );
  }

}
