import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators
} from '@angular/forms';

import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from '../../categoria/categoria';
import { CategoriaService } from '../../categoria/categoria.service';

@Component({
  selector: 'app-formulario-produto',
  templateUrl: './formulario-produto.component.html',
  styleUrls: ['./formulario-produto.component.scss']
})
export class FormularioProdutoComponent implements OnInit {
  public produto: Produto;
  public produtoForm: FormGroup;
  public categorias: Categoria[];
  count = 0;

  /**
   * Construtor da classe.
   *
   * @param produtoService
   * @param categoriaService
   * @param toast
   * @param router
   * @param route
   * @param builder
   */
  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private builder: FormBuilder
  ) {
    this.produto = new Produto();
    this.produto.isDestaque = true;
  }

  /**
   * Método carregado quando o componente estiver sendo renderizado.
   */
  ngOnInit() {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id'));

    this.categoriaService.getCategorias().subscribe(
      response => {
        this.categorias = response.content;
        if (id) {
          this.carregarProduto(id);
        } else {
        }
      },
      error => {
        this.toast.error(error);
      }
    );

    this.criarFormulario();
  }

  /**
   * Cria o formulario para o cadastro de produto.
   */
  public criarFormulario(): void {
    this.produtoForm = this.builder.group({
      id: [this.produto.id],
      nome: [this.produto.nome, Validators.required],
      preco: [this.produto.preco, Validators.required],
      descricao: [this.produto.descricao, Validators.required],
      categoria: [this.produto.categoria, Validators.required],
      itens: this.builder.array([
        this.criarItem()
      ])
    });
  }

  /**
   * Cria um novo item para o form group de categoria.
   */
  public criarItem(): FormGroup {
    return this.builder.group({
      categoria: ['', Validators.required]
    });
  }

  /**
   * Adiciona um grupo de categoria no array do formulario.
   */
  public adicionarItem(): void {
    this.itens.push(this.criarItem());
  }

  /**
   * Remove uma categoria.
   *
   * @param i
   */
  public removerItem(i: number): void {
    this.itens.removeAt(i);
  }

  /**
   * Remove uma categoria da lista.
   *
   * @param index
   */
  public removerCategoriaLista(index): void {
    console.log(index);
    // this.categorias.splice(index, 1);
  }

  /**
   * Carrega o produto para alteração se existir.
   *
   * @param id
   */
  public carregarProduto(id: number): void {
    this.produtoService.getProduto(id).subscribe(
      response => {
        this.produto = response.content;
        this.criarFormulario();
      },
      error => this.toast.error(error.mensagem)
    );
  }

  /**
   * Método responsável por adicionar um novo produto no sistema.
   */
  public salvarProduto(produtoForm: any): void {
    if (produtoForm.valid) {
      const produto = produtoForm.value;
      this.produtoService.salvarProduto(produto, produto.id).subscribe(
        response => {
          this.toast.success(response.messages.SUCCESS[0]);
          this.redirecionaListagemProdutos();
        },
        error => {
          this.toast.error(error.mensagem);
        }
      );
    }
  }

  /**
   * Redireciona o usuário para tela de produtos.
   */
  public redirecionaListagemProdutos(): void {
    this.router.navigate(['/admin/produto']);
  }

  /**
   * Recupera os itens do formulário.
   *
   * @return FormArray
   */
  get itens(): FormArray {
    return this.produtoForm.get('itens') as FormArray;
  }

  /**
   * Metodo que compara se as categorias informadas são iguais.
   *
   * @return boolean
   */
  public compararCategoria(c1: Categoria, c2: Categoria): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
