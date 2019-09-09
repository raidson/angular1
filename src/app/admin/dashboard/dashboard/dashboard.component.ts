import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Dashboard } from '../dashboard';
import { DashboardService } from '../dashboard.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public dashboard: Dashboard;

  /**
   * Costrutor da classe.
   *
   * @param dashboardService
   * @param toast
   */
  constructor(
    private dashboardService: DashboardService,
    private toast: ToastrService,
    private router: Router
  ) {
    this.dashboard = new Dashboard();
    this.dashboard.nuProdutos = 0;
    this.dashboard.nuCategorias = 0;
  }

  /**
   * Metodo carregado quando inicializa o component.
   */
  ngOnInit() {
    this.dashboardService.getDashboard().subscribe(response => {
      this.dashboard = response.content;
    },
    error => {
      this.toast.error(error);
    });
  }

  /**
   * Redireciona para a tela de listagem produtos.
   */
  public redirecionarProduto(): void {
    this.router.navigate(['/admin/produto']);
  }

  /**
   * Redireciona para a tela de listagem de categorias.
   */
  public redirecionarCategoria(): void {
    this.router.navigate(['/admin/categoria']);
  }
}
