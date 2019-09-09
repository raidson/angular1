import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcessoComponent } from './acesso.component';
import { LoginComponent } from './login/login.component';

import { AcessoRoutingModule } from './acesso-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AcessoRoutingModule
  ],
  declarations: [AcessoComponent, LoginComponent]
})
export class AcessoModule { }
