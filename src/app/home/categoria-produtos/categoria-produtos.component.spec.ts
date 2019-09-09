import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaProdutosComponent } from './categoria-produtos.component';

describe('CategoriaProdutosComponent', () => {
  let component: CategoriaProdutosComponent;
  let fixture: ComponentFixture<CategoriaProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
