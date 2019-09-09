import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertsModule } from 'angular-alert-module';

import { AdminRoutingModule } from './admin-routing.module';
import { ProdutoModule } from './produto/produto.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CategoriaModule } from './categoria/categoria.module';

import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ProdutoModule,
    CategoriaModule,
    DashboardModule,
    AdminRoutingModule,
    AlertsModule.forRoot()
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
