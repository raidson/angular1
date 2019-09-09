import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from './core/modal/modal.module';

import { AppComponent } from './app.component';
import { HomeModule } from '../app/home/home.module';
import { AdminModule } from '../app/admin/admin.module';
import { AcessoModule } from '../app/acesso/acesso.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { ModalValidacaoComponent } from './core/modal/modal-validacao/modal-validacao.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgbModule,
    HomeModule,
    AdminModule,
    ModalModule,
    AcessoModule,
    ToastrModule,
    BrowserModule,
    AdminRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalValidacaoComponent]
})
export class AppModule {}
