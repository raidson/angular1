import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Categoria } from '../categoria';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-formulario-categoria',
  templateUrl: './formulario-categoria.component.html',
  styleUrls: ['./formulario-categoria.component.scss']
})
export class FormularioCategoriaComponent implements OnInit {

  public id: any;
  public categoria: Categoria;
  public categoriaForm: FormGroup;

  /**
   * Construtor da classe.
   *
   * @param route
   * @param router
   * @param categoriaService
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriaService: CategoriaService,
    private toast: ToastrService,
    private builder: FormBuilder
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.categoria = new Categoria();

    if (this.id != null) {
      this.categoriaService.getCategoria(this.id).subscribe(
        response => {
          this.categoria = response.content;
          this.criarFormulario();
        },
        error => console.log(error.message)
      );
    } else {
      this.criarFormulario();
    }
  }

  /**
   * Método carregado quando o componente estiver sendo carregado.
   */
  ngOnInit(): void {
    this.criarFormulario();
  }

  /**
   * Salva uma nova categoria no sistema.
   *
   * @param categoriaForm
   */
  public salvarCategoria(categoriaForm: any): void {
    if (categoriaForm.valid) {
      const categoria = categoriaForm.value;
      this.categoriaService.salvarCategoria(categoria, categoria.id).subscribe(
      response => {
        this.toast.success(response.messages.SUCCESS[0]);
        this.voltarListagemCategoria();
      },
      error => {
        this.toast.error(error.message);
      });
    }
  }

  /**
   * Retorna para a tela de listagem de categoria.
   */
  public voltarListagemCategoria(): void {
    this.router.navigate(['/admin/categoria']);
  }

  /**
   * Cria um novo formulário de categoria.
   */
  public criarFormulario(): void {
    this.categoriaForm = this.builder.group({
      id: [this.categoria.id],
      nome: [this.categoria.nome, Validators.required]
    });
  }
}
