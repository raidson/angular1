import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';
import { ModalValidacaoComponent } from '../../../core/modal/modal-validacao/modal-validacao.component';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.scss']
})
export class ListaCategoriasComponent {

  public categorias: Categoria[];

  /**
   * Construtor da classe.
   *
   * @param categoriaService
   * @param toast
   * @param modalService
   */
  constructor(
    private categoriaService: CategoriaService,
    private toast: ToastrService,
    private modalService: NgbModal
  ) {
    this.categoriaService.getCategorias().subscribe(
      response => this.categorias = response.content,
      error => this.toast.error(error)
    );
  }

  /**
   * Abre o modal de confirmação de exclusão.
   *
   * @param id
   * @param index
   */
  public abrirModal(id: number, index: number): void {
    const modal = this.modalService.open(ModalValidacaoComponent);
    modal.componentInstance.id = id;
    modal.componentInstance.index = index;
    modal.componentInstance.titulo = 'Remover Categoria';
    modal.componentInstance.descricao = 'Deseja realmente remover essa caterogia ?';

    modal.componentInstance.remover.subscribe(($e) => {
      modal.close();
      this.deletarCategoria($e.id, $e.index);
    });
  }

  /**
   * Deleta uma categoria cadastrada no sistema.
   *
   * @param id
   */
  public deletarCategoria(id: number, index: number): void {
    if (id != null) {
      this.categoriaService.excluir(id).subscribe(
        response => {
          this.toast.success(response.messages.SUCCESS[0]);
          this.categorias.splice(index, 1);
        },
        error => {
          this.toast.error(error.mensagem);
        }
      );
    } else {
      this.toast.error('Falha ao remover categoria.');
    }
  }
}
