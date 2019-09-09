import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { ModalValidacaoComponent } from '../../../core/modal/modal-validacao/modal-validacao.component';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit {
  public produtos: Produto[];

  /**
   * Construtor da classe.
   */
  constructor(
    private produtoService: ProdutoService,
    private toast: ToastrService,
    private modalService: NgbModal
  ) {}

  /**
   * Quando o componente inicializar.
   */
  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(response => {
      this.produtos = response.content;
    }, error => this.toast.error('Produto', error));
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
    modal.componentInstance.titulo = 'Remover Produto';
    modal.componentInstance.descricao = 'Deseja realmente remover esse produto ?';

    modal.componentInstance.remover.subscribe(($e) => {
      modal.close();
      this.deletarProduto($e.id, $e.index);
    });
  }


  /**
   * Deleta um produto cadastrado no sistema.
   *
   * @param id
   * @param index
   */
  public deletarProduto(id: number, index: number): void {
    if (id != null) {
      this.produtoService.excluir(id).subscribe(response => {
        this.toast.success(response.messages.SUCCESS[0]);
        this.produtos.splice(index, 1);
      }, error => {
        console.log('Console: ' + error);
        this.toast.error(error.mensagem);
      });
    } else {
      this.toast.error('Falha ao remover produto.');
    }
  }
}
