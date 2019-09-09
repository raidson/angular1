import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalValidacaoComponent } from './modal-validacao.component';

describe('ModalValidacaoComponent', () => {
  let component: ModalValidacaoComponent;
  let fixture: ComponentFixture<ModalValidacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalValidacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalValidacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
