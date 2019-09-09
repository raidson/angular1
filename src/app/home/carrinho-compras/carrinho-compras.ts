import { Produto } from '../../admin/produto/produto';

/**
 * Classe responsável pelo carrinho de compras.
 */
export interface CarrinhoCompras {
  carregado: boolean;
  produtos: Produto[];
  quantidadeProdutos: number;
}
